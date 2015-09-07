var RobTech = RobTech || {};
RobTech.CustA = RobTech.CustA || {};

RobTech.CustA.customer = function(firstName, lastName) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function()
    {
        return this.firstName + " " + this.lastName;
    }
    
    return this;
}