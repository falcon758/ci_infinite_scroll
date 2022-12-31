(function ($) {
    $.fn.immoList = function (options) {
        // Default options
        const settings = $.extend({
            infiniteScrool: true
        }, options);

        var everythingLoaded = false;

        this.onPageBottom = function () {
            return $(window).scrollTop() + $(window).height() == $(document).height();
        };

        this.scrollListener = function () {
            const thisClass = this;

            $(window).data('scroll_progress', true).scroll(function(e) {
	            if ($(window).data('scroll_progress') == false) {
                    return;
                }

                if (thisClass.onPageBottom() && !everythingLoaded) {
                    thisClass.loadMore({});
                }
            });
        };

        this.insertRow = function (data) {
            const neededFields = [
                'id',
                'address',
                'price',
                'size'
            ];

            let newRow = $('#immo-list #example-row').clone();

            for (field in neededFields) {
                const fieldName = neededFields[field];

                if (data[fieldName] === undefined) {
                    return;
                }

                if (fieldName === 'id') {
                    newRow.attr('immo-id', data[fieldName]);
                    continue;
                }

                let findElement = newRow.find('.immo-' + fieldName);

                if (!findElement) {
                    continue;
                }

                findElement.html(data[fieldName]);
            }

            newRow.removeAttr('id');
            newRow.removeClass('d-none');

            $('#immo-list').append(newRow);
        };

        this.applyFilters = function (filters) {
            if (filters.length === 0) {
                return filters;
            }

            const allowedFilters = [
                'address',
                'price',
                'size'
            ];

            for (filter in filters) {
                if ($.inArray(filter, allowedFilters) === false) {
                    delete filters[filter];
                }
            }

            return filters;
        };

        this.applyAllFilters = function() {
            const allFilters = $('#immo-list .filters').find('.filter');

            let filters = {lastID: 1};

            allFilters.each(function(element) {
                const columnName = $(this).attr('column');
                const columnValue = $(this).val();
                
                if (columnValue !== '') {
                    filters[columnName] = columnValue;
                }
            });

            this.loadMore(filters);
        };

        this.loadMore = function (filters) {
            const lastID = $('#immo-list tbody tr:last-child' ).attr('immo-id') ?? 1;
            const dataString = this.applyFilters($.extend({ lastID : lastID }, filters));

            $(window).data('scroll_progress', false);

            const thisClass = this;

            $.ajax({
                type: 'POST',
                url: 'immo-list',
                data: dataString,
                dataType: 'json',
                cache : false,
                success: function (data) {
                    $(window).data('scroll_progress', true);
                    
                    if(data.length !== 0) {
                        for (immo in data) {
                            const immoData = data[immo];
                            thisClass.insertRow(immoData);
                        }
                    } else {
                        everythingLoaded = true;
                        $('#notif').removeClass('d-none').html('All real state loaded');
                    }
                }, error: function(xhr, status, error) {
                    console.log(error);
                },
            });
        }

        this.initTable = function () {
            const thisClass = this;

            $('#immo-list').DataTable({
                orderCellsTop: true,
                fixedHeader: true,
                searching: false,
                paging: false,
                info: false,
                initComplete: function () {
                    let api = this.api();

                    api
                        .columns()
                        .eq(0)
                        .each(function (colIdx) {
                            const columnIndex = $(api.column(colIdx).header()).index();

                            let cell = $('.filters th').eq(columnIndex);

                            let title = $(cell).text();
                            if (columnIndex >= 0) {
                                $(cell).html(
                                    '<input \
                                    class="filter"\
                                    column="' + title.toLowerCase() + '" type="text"\
                                    placeholder="' + title + '"/>');
                            }
                            
                            // On every keypress in this input
                            $('input', $('.filters th').eq(columnIndex))
                                .on('focusout', function (e) {
                                    thisClass.applyAllFilters();
                                })
                                .on('keypress', function (e) {
                                    if(e.which == 13) {
                                        thisClass.applyAllFilters();
                                    }
                                });
                        })
                    }
                });
        }

        this.initialize = function () {
            this.initTable();
            this.loadMore({});
            this.scrollListener();
        };

        return this.initialize();
    };
}( jQuery ));