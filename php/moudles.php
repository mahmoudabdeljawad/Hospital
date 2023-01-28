<script src="js/bootstrap.bundle.min.js"></script>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Procedure</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="php/insert.php" method="post" method="post">
                    <input hidden name="TableName" value="<?php echo $_GET["Table"];  ?>" />
                    <?php
                    include 'conn.php';
                    $query = "SHOW COLUMNS FROM " . $_GET["Table"] . "";
                    $result = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                    ?>
                        <?php
                        if ($row["Field"]  == "Date" || $row["Field"] == "date" || $row["Field"] == "Finish_Date") {
                        ?>
                            <div class="form-group">
                                <label for="exampleInputEmail1"><?= $row["Field"] ?></label>
                                <input type="date" class="form-control" name="<?= $row["Field"] ?>">
                            </div>
                        <?php
                        }else if($row["Field"] =="id" || $row["Field"] =="ID" ||$row["Field"]=="Id"){

                        }else{
                            ?>
                            <div class="form-group">
                                <label for="exampleInputEmail1"><?= $row["Field"] ?></label>
                                <input type="text" class="form-control" name="<?= $row["Field"] ?>">
                            </div>
                            <?php
                        }
                    } {
                        ?>
                        <?php

                        ?>

                    <?php


                    }
                    ?>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>