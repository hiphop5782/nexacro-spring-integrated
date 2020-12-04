(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EmpList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"empId\" type=\"INT\" size=\"38\"/><Column id=\"empName\" type=\"STRING\" size=\"21\"/><Column id=\"salary\" type=\"INT\" size=\"38\"/><Column id=\"hireDate\" type=\"DATE\" size=\"256\"/><Column id=\"phoneNumber\" type=\"STRING\" size=\"11\"/><Column id=\"email\" type=\"STRING\" size=\"50\"/><Column id=\"position\" type=\"STRING\" size=\"30\"/><Column id=\"dept\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","41","33","149","82",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원 조회");
            obj.set_font("30px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","194","1200","453",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsEmp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"empId\"/><Cell col=\"1\" text=\"empName\"/><Cell col=\"2\" text=\"salary\"/><Cell col=\"3\" text=\"hireDate\"/><Cell col=\"4\" text=\"phoneNumber\"/><Cell col=\"5\" text=\"email\"/><Cell col=\"6\" text=\"position\"/><Cell col=\"7\" text=\"dept\"/></Band><Band id=\"body\"><Cell text=\"bind:empId\"/><Cell col=\"1\" text=\"bind:empName\"/><Cell col=\"2\" text=\"bind:salary\"/><Cell col=\"3\" text=\"bind:hireDate\"/><Cell col=\"4\" text=\"bind:phoneNumber\"/><Cell col=\"5\" text=\"bind:email\"/><Cell col=\"6\" text=\"bind:position\"/><Cell col=\"7\" text=\"bind:dept\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EmpList.xfdl", function() {

        this.EmpList_onload = function(obj,e)
        {
        	//시작 시 전체 목록을 조회하여 화면에 출력
        	var id = "emp_list";
        	var url = "http://localhost:8080/nexacrospring/nexacro/list";
        	var reqDs = "";
        	var resDs = "dsEmp=list";
        	var args = "";
        	var callback = "displayList";

        	this.transaction(id, url, reqDs, resDs, args, callback);
        };

        this.displayList = function(id, code, message){

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EmpList_onload,this);
        };

        this.loadIncludeScript("EmpList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
