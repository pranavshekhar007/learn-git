
// Create a company object with a nested address object. The address object should have street, city, and zipcode properties. Write a function printCompanyAddress that prints the full address in a single string.
const company = {
    name: "ABC Inc.",
    address:{
        street: "123 Main St",
        city: "Anytown",
        zipcode : "1234"
    }
};
function printCompanyAddress(company){
    const {street, city, zipcode} = company.address;
    console.log(`${street}, ${city}, ${zipcode}`);
}
printCompanyAddress(company);