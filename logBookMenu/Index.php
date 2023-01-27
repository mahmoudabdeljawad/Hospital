<div id="R1t" class="container">
    <button onclick="My_module('log_book_minimum_number')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="R1t" class="table table-striped table-bordered" style="width:100%;">
                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("log_book_minimum_number");
                ?>

            </table>
        </div>
    </div>
</div>
<div id="R2t" class="container">
    <button onclick="My_module('logbook_em')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>

    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered" style="width:100%;">
                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("logbook_em");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="R3t" class="container">
    <button onclick="My_module('logbook_basic_pathology')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>

    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered" style="width:100%;">
                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("logbook_basic_pathology");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="R4t" class="container">
    <button onclick="My_module('logbok_autopsy')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered" style="width:100%;">

                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("logbok_autopsy");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="R5t" class="container">
    <button onclick="My_module('logbook_seminars_lectures')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered" style="width:100%;">

                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("logbook_seminars_lectures");
                ?>
            </table>
        </div>
    </div>
</div>

<div id="R6t" class="container">
    <button onclick="My_module('logbook_educational_presented')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered" style="width:100%;">

                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("logbook_educational_presented");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="R7t" class="container">
    <button onclick="My_module('logbook_educational_attended')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table class="table table-striped table-bordered" style="width:100%;">

                <?php
                require_once 'php/fetchobj.php';
                $tbale = new create_table();
                $tbale->table("logbook_educational_attended");
                ?>
            </table>
        </div>
    </div>
</div>
<script>
    $(document).ready(function() {
        $("#R1t").show();
        $("#R2t").hide();
        $("#R3t").hide();
        $("#R4t").hide();
        $("#R5t").hide();
        $("#R6t").hide();
        $("#R7t").hide();

        $("#R1").click(() => {
            $("#R1t").show();
            $("#R2t").hide();
            $("#R3t").hide();
            $("#R4t").hide();
            $("#R5t").hide();
            $("#R6t").hide();
            $("#R7t").hide();

        })
        $("#R2").click(() => {
            $("#R1t").hide();
            $("#R2t").show();
            $("#R3t").hide();
            $("#R4t").hide();
            $("#R5t").hide();
            $("#R6t").hide();
            $("#R7t").hide();

        })
        $("#R3").click(() => {
            $("#R1t").hide();
            $("#R2t").hide();
            $("#R3t").show();
            $("#R4t").hide();
            $("#R5t").hide();
            $("#R6t").hide();
            $("#R7t").hide();

        })
        $("#R4").click(() => {
            $("#R1t").hide();
            $("#R2t").hide();
            $("#R3t").hide();
            $("#R4t").show();
            $("#R5t").hide();
            $("#R6t").hide();
            $("#R7t").hide();

        })
        $("#R5").click(() => {
            $("#R1t").hide();
            $("#R2t").hide();
            $("#R3t").hide();
            $("#R4t").hide();
            $("#R5t").show();
            $("#R6t").hide();
            $("#R7t").hide();

        })
        $("#R6").click(() => {
            $("#R1t").hide();
            $("#R2t").hide();
            $("#R3t").hide();
            $("#R4t").hide();
            $("#R5t").hide();
            $("#R6t").show();
            $("#R7t").hide();

        })
        $("#R7").click(() => {
            $("#R1t").hide();
            $("#R2t").hide();
            $("#R3t").hide();
            $("#R4t").hide();
            $("#R5t").hide();
            $("#R6t").hide();
            $("#R7t").show();

        })
    })
</script>
<script>
    My_module = (table_name) => {
        let url = "php/moudles.php?Table=" + table_name;
        $("#datamodel").load(url, () => {
            $("#exampleModal").modal("show");
        })
    }
</script>