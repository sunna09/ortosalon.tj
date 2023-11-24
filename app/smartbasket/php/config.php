<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		 // require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 // const HOST = '';
		 // const LOGIN = '';
		 // const PASS = '';
		 // const PORT = '';

		// *** /SMTP *** //
   
    const SENDER = 'info@ortosalon.tj';
    const CATCHER = 'info@ortosalon.tj';
    const SUBJECT = 'Новый заказ | ortosalon.tj';
    const CHARSET = 'UTF-8';
    