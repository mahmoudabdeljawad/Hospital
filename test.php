
<div id="tU1tab32" class="container">

<button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
<div class="row">
    <div class="col-lg-12">
        <table id="" class="table table-striped table-bordered" style="width:100%;">
        <?php include 'php/ULTRASOUNDUroradiology.php';
               $table = new create_table();
               $table->table("uabdomen");
               ?>
            
        </table>
    </div>
</div>
</div>
<?php include 'include/footer.php' ?>
<script>
    $(document).ready(()=>{
        $("#tU1tab32").hide();

    })
</script>