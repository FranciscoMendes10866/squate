import { LocationDetails, ContactDetails, PersonalDetails } from ".";

const data = {
  fullName: "João Gomes",
  birthday: "12-12-1998",
  gender: "Masculino",
  weight: 74,
  height: 188,
  address: "Soure",
  zipCode: "3080-108",
  nationality: "Portuguesa",
  city: "Coimbra",
  phoneNumber: "92* *** ***",
  emergency: "93* *** ***",
  email: "gomes@gmail.com",
};

const ClientProfile = ({ fixedHeightPaper, userId }) => {
  console.log(userId);
  return (
    <>
      <PersonalDetails fixedHeightPaper={fixedHeightPaper} data={data} />
      <LocationDetails fixedHeightPaper={fixedHeightPaper} data={data} />
      <ContactDetails fixedHeightPaper={fixedHeightPaper} data={data} />
    </>
  );
};

export default ClientProfile;
