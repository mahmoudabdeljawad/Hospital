<div id="t1tab" class="container">
    <button  onclick="My_module('training_posts_held')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Hospital</th>
                        <th scope="col">Residency_Year</th>
                        <th scope="col">Finish_Date</th>
                        <th scope="col">Consultant</th>
                        <th scope="col">Consultant_signature</th>


                    </tr>
                </thead>
                <tbody>
                    <?php include 'php/gettableTraning.php' ?>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="t2tab" class="container">
<button  onclick="My_module('educational_and_academic_activities')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>

    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Course</th>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>



                    </tr>
                </thead>
                <tbody>
                    <?php
                    include 'php/conn.php';
                    $query = "SELECT * from educational_and_academic_activities";
                    $result = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                        <tr>
                            <td>
                                <?= $row["id"] ?>
                            </td>
                            <td><?= $row["Course"] ?></td>
                            <td><?= $row["Date"] ?></td>
                            <td><?= $row["Location"] ?></td>


                        </tr>
                    <?php
                    }
                    ?>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="t3tab" class="container">
<button  onclick="My_module('plain_film_reporting')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Supervised</th>
                        <th scope="col">Time_spent_reporting</th>
                        <th scope="col">Supervised</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    include 'php/conn.php';
                    $query = "SELECT * from plain_film_reporting";
                    $result = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                        <tr>
                            <td>
                                <?= $row["id"] ?>
                            </td>
                            <td><?= $row["Date"] ?></td>
                            <td><?= $row["Time_spent_reporting"] ?></td>
                            <td><?= $row["Supervised"] ?></td>

                        </tr>
                    <?php
                    }
                    ?>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="tF1tab" class="container">
<button  onclick="My_module('fbarium_enema')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Period</th>
                        <th scope="col">NProcedures</th>
                        <th scope="col">Comments</th>
                        <?php
                        include 'php/conn.php';
                        $query = "SELECT * from fbarium_enema";
                        $result = mysqli_query($conn, $query);
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                    <tr>
                        <td>
                            <?= $row["id"] ?>
                        </td>
                        <td><?= $row["Period"] ?></td>
                        <td><?= $row["NProcedures"] ?></td>
                        <td><?= $row["Comments"] ?></td>

                    </tr>
                <?php
                        }
                ?>

                </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="tF2tab" class="container">
<button  onclick="My_module('fbarium_swallow_meal')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Period</th>
                        <th scope="col">No_of_Procedures</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Trainer</th>

                        <?php
                        include 'php/conn.php';
                        $query = "SELECT * from  fbarium_swallow_meal";
                        $result = mysqli_query($conn, $query);
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                    <tr>
                        <td>
                            <?= $row["id"] ?>
                        </td>
                        <td><?= $row["Period"] ?></td>
                        <td><?= $row["No_of_Procedures"] ?></td>
                        <td><?= $row["Comments"] ?></td>
                        <td><?= $row["Trainer"] ?></td>


                    </tr>
                <?php
                        }
                ?>

                </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="tF3tab" class="container">

<button  onclick="My_module('fsmall_bowel_studies')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Period</th>
                        <th scope="col">No_of_Procedures</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Trainer</th>

                        <?php
                        include 'php/conn.php';
                        $query = "SELECT * from  fsmall_bowel_studies";
                        $result = mysqli_query($conn, $query);
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                    <tr>
                        <td>
                            <?= $row["id"] ?>
                        </td>
                        <td><?= $row["Period"] ?></td>
                        <td><?= $row["No_of_Procedures"] ?></td>
                        <td><?= $row["Comments"] ?></td>
                        <td><?= $row["Trainer"] ?></td>


                    </tr>
                <?php
                        }
                ?>

                </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="tF4tab" class="container">
<button  onclick="My_module('uabdomen')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Period</th>
                        <th scope="col">Procedures Included</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Trainer</th>

                        <?php
                        include 'php/conn.php';
                        $query = "SELECT * from  furoradiology_intravenous_urogram";
                        $result = mysqli_query($conn, $query);
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                    <tr>
                        <td>
                            <?= $row["id"] ?>
                        </td>
                        <td><?= $row["Period"] ?></td>
                        <td><?= $row["Procedures_Included"] ?></td>
                        <td><?= $row["Comments"] ?></td>
                        <td><?= $row["Trainer"] ?></td>
                    </tr>
                <?php
                        }
                ?>
                </tr>
                </thead>
                <tbody>

                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="tF5tab" class="container">

<button  onclick="My_module('furoradiology_others')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Date</th>
                        <th scope="col">Procedure</th>
                        <th scope="col">Complication</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Trainer</th>


                    </tr>
                </thead>
                <tbody>
                    <?php
                    include 'php/conn.php';
                    $query = "SELECT * from  furoradiology_others";
                    $result = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                        <tr>
                            <td> <?= $row["id"] ?></td>
                            <td><?= $row["Date"] ?></td>
                            <td><?= $row["Procedure_"] ?></td>
                            <td><?= $row["Complication"] ?></td>
                            <td><?= $row["Comments"] ?></td>
                            <td><?= $row["Trainer"] ?></td>
                        </tr>
                    <?php
                    }
                    ?>
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        </div>
    </div>
</div>
<div id="tU1tab" class="container">
<button  onclick="My_module('uabdomen')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("uabdomen");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="tU2tab" class="container">
<button  onclick="My_module('uuroradiology')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("uuroradiology");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="tU3tab" class="container">
<button  onclick="My_module('usmall_part')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("usmall_part");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="tU4tab" class="container">
<button  onclick="My_module('ucardiovascula')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("ucardiovascula");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="tU5tab" class="container">
<button  onclick="My_module('educational_and_academic_activities')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("umusculoskeletal");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM1Tab" class="container">
<button  onclick="My_module('ctthoracic')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("ctthoracic");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM2Tab" class="container">
<button  onclick="My_module('mri_thoracic')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("mri_thoracic");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM3Tab" class="container">
<button  onclick="My_module('ctmribrain')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("ctmribrain");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM4Tab" class="container">
<button  onclick="My_module('ctmrimusculoskeletal')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("ctmrimusculoskeletal");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM5Tab" class="container">
<button  onclick="My_module('ctabdomen')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("ctabdomen");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM6Tab" class="container">
<button  onclick="My_module('mriabdomen')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("mriabdomen");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="CM7Tab" class="container">
<button  onclick="My_module('ctmripelvis')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("ctmripelvis");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="I1Tab" class="container">
<button  onclick="My_module('intvascular')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("intvascular");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="I2Tab" class="container">
<button  onclick="My_module('intbiopsy_drainage')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("intbiopsy_drainage");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="I3Tab" class="container">
<button  onclick="My_module('intmiscellaneous')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("intmiscellaneous");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="B1Tab" class="container" style="display:none">
<button  onclick="My_module('breast_mammography')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("breast_mammography");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="B2Tab" class="container">
<button  onclick="My_module('breast_ultra_misc')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table(" breast_ultra_misc");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="PA1tab" class="container" >
<button  onclick="My_module('paediatric_gast')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("paediatric_gast");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="PA2tab" class="container" >
<button  onclick="My_module('paediatric_urolo')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("paediatric_urolo");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="PA3tab" class="container" >
<button  onclick="My_module('paediatric_ultrasound')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("paediatric_ultrasound");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="PA4tab" class="container" >
<button  onclick="My_module('paediatric_ct')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("paediatric_ct");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="PA5tab" class="container" >
<button  onclick="My_module('paediatric_mri')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("paediatric_mri");
                ?>
            </table>
        </div>
    </div>
</div>
<div id="PA6tab" class="container" >
<button  onclick="My_module('paediatric_plain_film')" class="btn btn-info" style="margin:10px 0px 10px 0px">Add New</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="" class="table table-striped table-bordered" style="width:100%;">
                <?php require_once 'php/fetchobj.php';
                $table = new create_table();
                $table->table("paediatric_plain_film");
                ?>
            </table>
        </div>
    </div>
</div>
<script>
    My_module=(table_name)=>{
        let url ="php/moudles.php?Table="+table_name;
        $("#datamodel").load(url,()=>{
            $("#exampleModal").modal("show");
        })
    }

</script>