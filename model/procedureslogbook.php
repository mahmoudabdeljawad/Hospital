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
                    <div class="form-group">
                        <label for="exampleInputEmail1">Procedures</label>
                        <input type="text" class="form-control" name="PROCEDURES">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Minimum Requirements</label>
                        <input type="text" name="Minimum_requirements" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">No Performed</label>
                        <input type="text" name="No_Performed" class="form-control">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" >Create</button>
                    </div>


                </form>
            </div>

        </div>
    </div>
</div>