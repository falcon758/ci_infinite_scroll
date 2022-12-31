# CodeIgniter 4 Infinite Scroll

CodeIgniter 4 Infinite Scroll is a simple implementation for a endless scroll with a bootstrap 5 table implementation.

## Installation & updates

`composer create-project falcon758/ci_infinite_scroll` then `composer update` whenever
there is a new release.

## Setup

Copy `env` to `.env` and tailor for your app, specifically the baseURL
and any database settings.

## Server Requirements

PHP version 7.4 or higher is required, with the following extensions installed:

- [intl](http://php.net/manual/en/intl.requirements.php)
- [mbstring](http://php.net/manual/en/mbstring.installation.php)

Additionally, make sure that the following extensions are enabled in your PHP:

- json (enabled by default - don't turn it off)
- [mysqlnd](http://php.net/manual/en/mysqlnd.install.php) if you plan to use MySQL
- [libcurl](http://php.net/manual/en/curl.requirements.php) if you plan to use the HTTP\CURLRequest library
