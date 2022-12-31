<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Real State</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <script src="assets/jquery/jquery-3.6.3.min.js"></script>
        <script src="assets/jquery/jquery-datatables-1.13.1.min.js"></script>
        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="assets/datatables/dataTables.bootstrap5.min.js"></script>
        <script src="assets/js/immo-list.js"></script>
        <script src="assets/js/loader.js"></script>
    </head>
    <body>
        <div class="container">
            <h1>Real State</h1>

            <table id="immo-list" class="table table-striped">
                <thead>
                    <tr class="filters">
                        <th>Address</th>
                        <th>Price</th>
                        <th>Size</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="example-row" class="d-none">
                        <td class="immo-address">Address</td>
                        <td class="immo-price">Price</td>
                        <td class="immo-size">Size</td>
                    </tr>
                <tfoot>
                    <tr>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Size</th>
                    </tr>
                </tfoot>
            </table>
            
            <div id="notif" class="alert alert-warning d-none"></div>
        </div>
    </body>
</html>