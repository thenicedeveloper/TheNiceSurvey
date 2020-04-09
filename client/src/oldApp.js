<div className="col-sm-12 col-md-6">
    <form>
        <div className="form-group row">
        <p className="text-muted mx-auto mb-1 col-12">Add a question to your survey: </p>  

        <div className="col-sm-8 m-0">
            <input id="q_input" className="form-control" type="text" placeholder="Type your a question" required/>
        </div>
        <div className="col-sm-4 text-center m-0">
            <button className="form-control text-center btn" id="addQuestion" onClick={addQuestion} > 
            Add Question               
            </button>               
        </div>  
        </div>
    </form>
</div>