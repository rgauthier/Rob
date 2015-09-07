var RobTech = RobTech || {};
RobTech.CustB = RobTech.CustB || {};

RobTech.CustB.customer = function(firstName, middleName, lastName) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.fullName = function()
    {
        return this.firstName + " " + this.middleName + " " + this.lastName;
    }
    
    return this;
}