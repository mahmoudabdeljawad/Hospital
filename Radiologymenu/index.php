<div id="t1tab" class="container">
    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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
    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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
    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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
    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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
    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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

    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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

    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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

    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Training Posts Held</button>
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

                        <?php
                        include 'php/conn.php';
                        $query = "SELECT * from  furoradiology_others";
                        $result = mysqli_query($conn, $query);
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                    <tr>
                        <td>
                            <?= $row["id"] ?>
                        </td>
                        <td><?= $row["Date"] ?></td>
                        <td><?= $row["Procedure_"] ?></td>
                        <td><?= $row["Complication"] ?></td>
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
<script>
    $(document).ready(function() {

        $("#t1tab").show();
        $("#t2tab").hide();
        $("#t3tab").hide();
        $("#tF1tab").hide();
        $("#sub1bar").hide();
        $("#tF2tab").hide();
        $("#tF3tab").hide();
        $("#tF3tab").hide();
        $("#tF4tab").hide();
        $("#tF5tab").hide();
        $("#sub2bar").hide();


        $("#t1").click(() => {
            $("#t1tab").show();
            $("#t2tab").hide();
            $("#t3tab").hide()
            $("#tF1tab").hide();
            $("#sub1bar").hide();
            $("#t2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#tF5tab").hide();
            $("#sub2bar").hide();

        })
        $("#t2").click(() => {
            $("#t2tab").show()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#tF1tab").hide();
            $("#sub1bar").hide();
            $("#tF2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#tF5tab").hide();
            $("#sub2bar").hide();

        })
        $("#t3").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").show()
            $("#tF1tab").hide();
            $("#sub1bar").hide();
            $("#tF2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#tF5tab").hide();
            $("#sub2bar").hide();

        })
        $("#t4").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#sub1bar").show();
            $("#tF1tab").show();
            $("#tF2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#tF5tab").hide();
            $("#sub2bar").hide();

        })
        $("#tF1").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#tF1tab").show();
            $("#tF2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#sub2bar").hide();

            $("#tF5tab").hide();

        })
        $("#tF2").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#tF1tab").hide();
            $("#tF2tab").show();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#tF5tab").hide();
            $("#sub2bar").hide();

        })
        $("#tF3").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#tF1tab").hide();
            $("#tF2tab").hide();
            $("#tF3tab").show();
            $("#tF4tab").hide();
            $("#tF5tab").hide();
            $("#sub2bar").hide();

        })
        $("#tF4").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#tF1tab").hide();
            $("#tF2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").show();
            $("#tF5tab").hide();
            $("#sub2bar").hide();


        })
        $("#tF5").click(() => {
            $("#t2tab").hide()
            $("#t1tab").hide()
            $("#t3tab").hide()
            $("#tF1tab").hide();
            $("#tF2tab").hide();
            $("#tF3tab").hide();
            $("#tF4tab").hide();
            $("#tF5tab").show();
            $("#sub2bar").hide();


        })
        $("#t5").click(() => {
            $("sub2bar").show()
        })


    })
</script>