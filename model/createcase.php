<script src="js/bootstrap.bundle.min.js"></script>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Case</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="php/insert.php" method="post" method="post">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Patient ID</label>
                        <input type="number" class="form-control" name="Patient_ID">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Age</label>
                        <input type="number" name="Age" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">ASA</label>
                        <input type="text" name="asa" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Urgency</label>
                        <input type="text" name="Urgency" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Supervision</label>
                        <input type="text" name="Supervision" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Operation</label>
                        <input type="text" name="Operation" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Specialty</label>
                        <input type="text" name="Specialty" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Date</label>
                        <input type="date" name="Date" class="form-control">
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