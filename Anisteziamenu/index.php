<div id="caselogbook" class="container">
    <button id="model-show" class="btn btn-info" style="margin:10px 0px 10px 0px">Create New Anaesthesia Cases Logobook</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="cases" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Patient_ID</th>
                        <th scope="col">Age</th>
                        <th scope="col">ASA</th>
                        <th scope="col">Urgency</th>
                        <th scope="col">Supervision</th>
                        <th scope="col">Operation</th>
                        <th scope="col">Specialty</th>
                        <th scope="col">Date</th>

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
<div id="procedurelogbook" class="container" style="display: none;">
    <button id="model-show1" class="btn btn-info" style="margin:10px 0px 10px 0px">
        Create New Procedure Logbook
    </button>
    <div class="row">
        <div class="col-lg-12">
            <table id="procedure" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">PROCEDURES</th>
                        <th scope="col">Minimum requirements</th>
                        <th scope="col">No.Performed</th>
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
<div id="Technique" class="container" style="display: none;">
    <button id="model-show2" class="btn btn-info" style="margin:10px 0px 10px 0px">
Create new Technique
</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="Techniquetab" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Anesthetic Technique</th>
                        <th scope="col">Minimum requirements</th>
                        <th scope="col">No.Performed</th>
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
<div id="Classification" class="container" style="display: none;">
    <button id="model-show3" class="btn btn-info" style="margin:10px 0px 10px 0px">Create New Classification</button>
    <div class="row">
        <div class="col-lg-12">
            <table id="Classificationtab" class="table table-striped table-bordered" style="width:100%;">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">ASA</th>
                        <th scope="col">Definition</th>
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
    $("#Casesbar").click(() => {
        $("#caselogbook").show();
        $("#Classification").hide();
        $("#Technique").hide();
        $("#procedurelogbook").hide();
    })
    $("#Proceduresbar").click(() => {
        $("#Classification").hide();
        $("#Technique").hide();
        $("#procedurelogbook").show();
        $("#caselogbook").hide();

    })
    $("#Techniquebar").click(() => {
        $("#Classification").hide();
        $("#Technique").show();
        $("#procedurelogbook").hide();
        $("#caselogbook").hide();
    })
    $("#Classificationbar").click(() => {
        $("#Classification").show();
        $("#Technique").hide();
        $("#procedurelogbook").hide();
        $("#caselogbook").hide();
    })
</script>