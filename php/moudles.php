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
                    $query = "SELECT * from " . $_GET["Table"] . " Limit 1";
                    $result = mysqli_query($conn, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                        foreach ($row as $k => $v) {
                            if ($k == "id") {
                            } else if ($k == "Date" || $k == "date" || $k=="Finish_Date" ) {
                    ?>
                                <div class="form-group">
                                    <label for="exampleInputEmail1"><?= $k ?></label>
                                    <input type="date" class="form-control" name="<?= $k ?>">
                                </div>
                            <?php

                            } else {
                            ?>
                                <?php

                                ?>
                                <div class="form-group">
                                    <label for="exampleInputEmail1"><?= $k ?></label>
                                    <input type="text" class="form-control" name="<?= $k ?>">
                                </div>
                    <?php
                            }
                        }
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