<?php

define( 'VITE', true );

function maybe_use_vite()
{
    return ( defined('VITE') && VITE ? 'http://localhost:5173' : '' );
}

?>
<!DOCTYPE html>
<html>
<head>

    <!-- meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <link rel="icon" href="data:,">

    <!-- title -->
    <title>Vite for WordPress</title>

    <!-- link css -->
    <link rel="stylesheet" href="<?=maybe_use_vite();?>/assets/frontend-less.min.css">
    <link rel="stylesheet" href="<?=maybe_use_vite();?>/assets/backend-less.min.css">
    <link rel="stylesheet" href="<?=maybe_use_vite();?>/assets/frontend-scss.min.css">
    <link rel="stylesheet" href="<?=maybe_use_vite();?>/assets/backend-scss.min.css">
    <style>
    body { background-color: #000; color: #fff; font-family: Arial; font-size: 18px; }
    </style>

</head>
<body>

<h1>Tests</h1>

<div class="less-frontend">less-frontend</div>
<div class="less-backend">less-backend</div>
<div class="scss-frontend">scss-frontend</div>
<div class="scss-backend">scss-backend</div>
<div class="js-frontend">js-frontend</div>
<div class="js-backend">js-backend</div>

<script src="<?=maybe_use_vite();?>/assets/frontend.min.js"></script>
<script src="<?=maybe_use_vite();?>/assets/backend.min.js"></script>

</body>
</html>