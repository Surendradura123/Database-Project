

use hotel
db
show dbs

db.createCollection("Staff")
db.createCollection("Service")
db.createCollection("Hotel")
db.createCollection("Reservation")
db.createCollection("Customer")
db.createCollection("Room")
db.createCollection("Check_In")
db.createCollection("Bill")
db.createCollection("Check_Out")
db.createCollection("Payment")
show collections

db.Staff.insert(
[{
  "Staff_id": 1,
  "Hotel_id": 1,
  "Service_id": 1,
  "First_Name": "Isak",
  "Last_Name": "Grimmer",
  "Email": "igrimmer0@mit.edu",
  "Password": "Zm879zO8lSh",
  "DOB": "1997-07-23",
  "Mobile": "6571671420",
  "Address": "72 Hanover Center",
  "Country": "Brazil",
  "Position": "Sales"
}, {
  "Staff_id": 2,
  "Hotel_id": 2,
  "Service_id": 2,
  "First_Name": "Clement",
  "Last_Name": "Gaynesford",
  "Email": "cgaynesford1@cafepress.com",
  "Password": "DL0bEhk7Lt",
  "DOB": "1981-10-17",
  "Mobile": "2523333740",
  "Address": "4 Bluejay Trail",
  "Country": "Belize",
  "Position": "Business Development"
}, {
  "Staff_id": 3,
  "Hotel_id": 3,
  "Service_id": 3,
  "First_Name": "Luke",
  "Last_Name": "Pourvoieur",
  "Email": "lpourvoieur2@amazon.co.uk",
  "Password": "VSa3YNocI",
  "DOB": "1981-05-19",
  "Mobile": "2342719605",
  "Address": "398 Maple Wood Point",
  "Country": "Bosnia and Herzegovina",
  "Position": "Training"
}, {
  "Staff_id": 4,
  "Hotel_id": 4,
  "Service_id": 4,
  "First_Name": "Inger",
  "Last_Name": "Bagby",
  "Email": "ibagby3@themeforest.net",
  "Password": "r9XMOnRN",
  "DOB": "1980-07-07",
  "Mobile": "5459377280",
  "Address": "447 Larry Junction",
  "Country": "Russia",
  "Position": "Human Resources"
}, {
  "Staff_id": 5,
  "Hotel_id": 5,
  "Service_id": 5,
  "First_Name": "Norri",
  "Last_Name": "Beatson",
  "Email": "nbeatson4@imageshack.us",
  "Password": "YBg9tb9ce",
  "DOB": "1981-12-09",
  "Mobile": "8701641443",
  "Address": "10 Stang Place",
  "Country": "Indonesia",
  "Position": "Services"
}, {
  "Staff_id": 6,
  "Hotel_id": 6,
  "Service_id": 6,
  "First_Name": "Ashlee",
  "Last_Name": "Muge",
  "Email": "amuge5@washington.edu",
  "Password": "DdcaYDBi",
  "DOB": "1994-10-27",
  "Mobile": "8587648498",
  "Address": "78710 Derek Crossing",
  "Country": "Portugal",
  "Position": "Product Management"
}, {
  "Staff_id": 7,
  "Hotel_id": 7,
  "Service_id": 7,
  "First_Name": "Correy",
  "Last_Name": "O'Moylane",
  "Email": "comoylane6@drupal.org",
  "Password": "spUreaZ9",
  "DOB": "1987-02-21",
  "Mobile": "6204530685",
  "Address": "99639 Granby Drive",
  "Country": "Colombia",
  "Position": "Services"
}, {
  "Staff_id": 8,
  "Hotel_id": 8,
  "Service_id": 8,
  "First_Name": "Kenyon",
  "Last_Name": "Castelletto",
  "Email": "kcastelletto7@altervista.org",
  "Password": "ADi9Wdon0gQ",
  "DOB": "1995-08-02",
  "Mobile": "6921941164",
  "Address": "41 Jenifer Plaza",
  "Country": "Indonesia",
  "Position": "Legal"
}, {
  "Staff_id": 9,
  "Hotel_id": 9,
  "Service_id": 9,
  "First_Name": "Chrissy",
  "Last_Name": "Emmert",
  "Email": "cemmert8@lulu.com",
  "Password": "DshNnduvIUh",
  "DOB": "1987-08-24",
  "Mobile": "8496867897",
  "Address": "3971 American Terrace",
  "Country": "China",
  "Position": "Training"
}, {
  "Staff_id": 10,
  "Hotel_id": 10,
  "Service_id": 10,
  "First_Name": "Randell",
  "Last_Name": "Wagen",
  "Email": "rwagen9@xrea.com",
  "Password": "QN8abzQPU0j",
  "DOB": "1989-02-12",
  "Mobile": "9875607316",
  "Address": "9925 Division Pass",
  "Country": "Afghanistan",
  "Position": "Legal"
}]
)

db.Staff.find()

db.Customer.insert(
[{
  "Customer_id": 1,
  "Reservation_id": 1,
  "Service_id": 1,
  "First_Name": "Mariel",
  "Last_Name": "McNickle",
  "Email": "mmcnickle0@npr.org",
  "Password": "87GIfHg",
  "DOB": "1996-03-20",
  "Mobile": "5632948185",
  "Address": "2349 Sunbrook Pass",
  "Country": "China"
}, {
  "Customer_id": 2,
  "Reservation_id": 2,
  "Service_id": 2,
  "First_Name": "Minetta",
  "Last_Name": "Golsthorp",
  "Email": "mgolsthorp1@360.cn",
  "Password": "qiB9QycXvJ",
  "DOB": "1981-10-31",
  "Mobile": "5523726982",
  "Address": "17 Briar Crest Alley",
  "Country": "Indonesia"
}, {
  "Customer_id": 3,
  "Reservation_id": 3,
  "Service_id": 3,
  "First_Name": "Wade",
  "Last_Name": "Zukerman",
  "Email": "wzukerman2@biblegateway.com",
  "Password": "hAhezGb",
  "DOB": "1986-03-09",
  "Mobile": "1383923126",
  "Address": "1189 Linden Pass",
  "Country": "Thailand"
}, {
  "Customer_id": 4,
  "Reservation_id": 4,
  "Service_id": 4,
  "First_Name": "Mallory",
  "Last_Name": "Hinks",
  "Email": "mhinks3@wisc.edu",
  "Password": "SRE1PFrE",
  "DOB": "1995-08-15",
  "Mobile": "6735866988",
  "Address": "3 Sachs Lane",
  "Country": "Argentina"
}, {
  "Customer_id": 5,
  "Reservation_id": 5,
  "Service_id": 5,
  "First_Name": "Humfrey",
  "Last_Name": "Lune",
  "Email": "hlune4@reverbnation.com",
  "Password": "YunJqgVmsnG",
  "DOB": "1988-02-25",
  "Mobile": "4596316299",
  "Address": "4613 Sugar Crossing",
  "Country": "Thailand"
}, {
  "Customer_id": 6,
  "Reservation_id": 6,
  "Service_id": 6,
  "First_Name": "Basilio",
  "Last_Name": "Caton",
  "Email": "bcaton5@devhub.com",
  "Password": "lUUAr0gFR7Bj",
  "DOB": "1995-03-27",
  "Mobile": "7639325863",
  "Address": "20 Porter Way",
  "Country": "South Africa"
}, {
  "Customer_id": 7,
  "Reservation_id": 7,
  "Service_id": 7,
  "First_Name": "Hagan",
  "Last_Name": "Bassham",
  "Email": "hbassham6@hexun.com",
  "Password": "vYUpbmg",
  "DOB": "1993-09-03",
  "Mobile": "1364806360",
  "Address": "666 Rowland Circle",
  "Country": "Portugal"
}, {
  "Customer_id": 8,
  "Reservation_id": 8,
  "Service_id": 8,
  "First_Name": "Neil",
  "Last_Name": "Dobbs",
  "Email": "ndobbs7@addtoany.com",
  "Password": "zI7t8UD",
  "DOB": "1980-07-30",
  "Mobile": "4625803498",
  "Address": "219 American Parkway",
  "Country": "Philippines"
}, {
  "Customer_id": 9,
  "Reservation_id": 9,
  "Service_id": 9,
  "First_Name": "Dimitri",
  "Last_Name": "Heball",
  "Email": "dheball8@hibu.com",
  "Password": "e7a4KOIp",
  "DOB": "1983-12-12",
  "Mobile": "4492597046",
  "Address": "2233 Cody Trail",
  "Country": "Malaysia"
}, {
  "Customer_id": 10,
  "Reservation_id": 10,
  "Service_id": 10,
  "First_Name": "Lorrayne",
  "Last_Name": "Northedge",
  "Email": "lnorthedge9@blogger.com",
  "Password": "Dq04I1ut1K",
  "DOB": "1983-10-27",
  "Mobile": "4385515691",
  "Address": "7474 Rigney Lane",
  "Country": "Brazil"
}]
)


db.Customer.find()

db.Service.insert(
[{
  "Service_id": 1,
  "Customer_id": 1,
  "Staff_id": 1,
  "Service_Name": "V8 Splash Strawberry Kiwi",
  "Service_Price": "€37,55"
}, {
  "Service_id": 2,
  "Customer_id": 2,
  "Staff_id": 2,
  "Service_Name": "Dried Peach",
  "Service_Price": "€40,17"
}, {
  "Service_id": 3,
  "Customer_id": 3,
  "Staff_id": 3,
  "Service_Name": "Chilli Paste, Hot Sambal Oelek",
  "Service_Price": "€9,79"
}, {
  "Service_id": 4,
  "Customer_id": 4,
  "Staff_id": 4,
  "Service_Name": "Corn Meal",
  "Service_Price": "€73,11"
}, {
  "Service_id": 5,
  "Customer_id": 5,
  "Staff_id": 5,
  "Service_Name": "Wine - Red, Concha Y Toro",
  "Service_Price": "€93,42"
}, {
  "Service_id": 6,
  "Customer_id": 6,
  "Staff_id": 6,
  "Service_Name": "Mushroom - Chanterelle, Dry",
  "Service_Price": "€88,32"
}, {
  "Service_id": 7,
  "Customer_id": 7,
  "Staff_id": 7,
  "Service_Name": "Bacardi Mojito",
  "Service_Price": "€36,02"
}, {
  "Service_id": 8,
  "Customer_id": 8,
  "Staff_id": 8,
  "Service_Name": "Sprouts - Corn",
  "Service_Price": "€75,68"
}, {
  "Service_id": 9,
  "Customer_id": 9,
  "Staff_id": 9,
  "Service_Name": "Tart Shells - Savory, 3",
  "Service_Price": "€79,46"
}, {
  "Service_id": 10,
  "Customer_id": 10,
  "Staff_id": 10,
  "Service_Name": "Maintenance Removal Charge",
  "Service_Price": "€72,65"
}]
)

db.Service.find()

db.Hotel.insert(
[{
  "Hotel_id": 1,
  "Staff_id": 1,
  "Name": "Sagittarius serpentarius",
  "Phone": "8874326351",
  "Email": "abirt0@japanpost.jp",
  "City": "Orléans",
  "Country": "France"
}, {
  "Hotel_id": 2,
  "Staff_id": 2,
  "Name": "Hystrix cristata",
  "Phone": "1049180639",
  "Email": "gohenehan1@amazon.co.uk",
  "City": "Tingloy",
  "Country": "Philippines"
}, {
  "Hotel_id": 3,
  "Staff_id": 3,
  "Name": "Cygnus buccinator",
  "Phone": "8751594646",
  "Email": "mhexter2@yellowbook.com",
  "City": "Youdian",
  "Country": "China"
}, {
  "Hotel_id": 4,
  "Staff_id": 4,
  "Name": "Lepus arcticus",
  "Phone": "7609346058",
  "Email": "ibrunnstein3@ucla.edu",
  "City": "Zhili",
  "Country": "China"
}, {
  "Hotel_id": 5,
  "Staff_id": 5,
  "Name": "Anas bahamensis",
  "Phone": "2501917206",
  "Email": "deilles4@army.mil",
  "City": "Lingyang",
  "Country": "China"
}, {
  "Hotel_id": 6,
  "Staff_id": 6,
  "Name": "Cochlearius cochlearius",
  "Phone": "2943363889",
  "Email": "wlembke5@tmall.com",
  "City": "Chadian",
  "Country": "China"
}, {
  "Hotel_id": 7,
  "Staff_id": 7,
  "Name": "Sus scrofa",
  "Phone": "7813551027",
  "Email": "dmallord6@cnet.com",
  "City": "Haoxinying",
  "Country": "China"
}, {
  "Hotel_id": 8,
  "Staff_id": 8,
  "Name": "unavailable",
  "Phone": "5656979710",
  "Email": "llaugharne7@ezinearticles.com",
  "City": "San Agustin",
  "Country": "Peru"
}, {
  "Hotel_id": 9,
  "Staff_id": 9,
  "Name": "Agkistrodon piscivorus",
  "Phone": "8599820354",
  "Email": "hwinthrop8@photobucket.com",
  "City": "Yangzhou",
  "Country": "China"
}, {
  "Hotel_id": 10,
  "Staff_id": 10,
  "Name": "Pelecanus conspicillatus",
  "Phone": "9789108923",
  "Email": "rbaldelli9@goo.ne.jp",
  "City": "Kodamachō-kodamaminami",
  "Country": "Japan"
}]
)

db.Hotel.find()

db.Reservation.insert(
[{
  "Reservation_id": 1,
  "Room_id": 1,
  "Customer_id": 1,
  "Reservation_Date": "2017-03-17",
  "Check_In_Date": "2017-11-24",
  "Check_Out_Date": "2017-11-10",
  "No_of_Nights": 7
}, {
  "Reservation_id": 2,
  "Room_id": 2,
  "Customer_id": 2,
  "Reservation_Date": "2017-03-17",
  "Check_In_Date": "2018-03-15",
  "Check_Out_Date": "2017-08-04",
  "No_of_Nights": 1
}, {
  "Reservation_id": 3,
  "Room_id": 3,
  "Customer_id": 3,
  "Reservation_Date": "2017-04-03",
  "Check_In_Date": "2018-02-06",
  "Check_Out_Date": "2017-12-27",
  "No_of_Nights": 4
}, {
  "Reservation_id": 4,
  "Room_id": 4,
  "Customer_id": 4,
  "Reservation_Date": "2017-03-09",
  "Check_In_Date": "2017-12-21",
  "Check_Out_Date": "2017-11-30",
  "No_of_Nights": 10
}, {
  "Reservation_id": 5,
  "Room_id": 5,
  "Customer_id": 5,
  "Reservation_Date": "2017-04-21",
  "Check_In_Date": "2017-07-10",
  "Check_Out_Date": "2017-08-16",
  "No_of_Nights": 3
}, {
  "Reservation_id": 6,
  "Room_id": 6,
  "Customer_id": 6,
  "Reservation_Date": "2017-04-24",
  "Check_In_Date": "2018-04-19",
  "Check_Out_Date": "2017-08-16",
  "No_of_Nights": 1
}, {
  "Reservation_id": 7,
  "Room_id": 7,
  "Customer_id": 7,
  "Reservation_Date": "2017-04-12",
  "Check_In_Date": "2018-02-09",
  "Check_Out_Date": "2017-11-16",
  "No_of_Nights": 4
}, {
  "Reservation_id": 8,
  "Room_id": 8,
  "Customer_id": 8,
  "Reservation_Date": "2017-04-11",
  "Check_In_Date": "2017-12-03",
  "Check_Out_Date": "2017-07-20",
  "No_of_Nights": 5
}, {
  "Reservation_id": 9,
  "Room_id": 9,
  "Customer_id": 9,
  "Reservation_Date": "2017-04-30",
  "Check_In_Date": "2017-08-03",
  "Check_Out_Date": "2017-09-15",
  "No_of_Nights": 7
}, {
  "Reservation_id": 10,
  "Room_id": 10,
  "Customer_id": 10,
  "Reservation_Date": "2017-04-05",
  "Check_In_Date": "2017-06-02",
  "Check_Out_Date": "2017-11-10",
  "No_of_Nights": 2
}]
)

db.Reservation.find()

db.Room.insert(
[{
  "Room_id": 1,
  "Hotel_id": 1,
  "Room_Type": 4,
  "Room_Img": "http://dummyimage.com/164x118.jpg/ff4444/ffffff",
  "Room_Description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  "Price": "€637,29"
}, {
  "Room_id": 2,
  "Hotel_id": 2,
  "Room_Type": 5,
  "Room_Img": "http://dummyimage.com/189x181.jpg/ff4444/ffffff",
  "Room_Description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
  "Price": "€256,24"
}, {
  "Room_id": 3,
  "Hotel_id": 3,
  "Room_Type": 1,
  "Room_Img": "http://dummyimage.com/172x220.jpg/dddddd/000000",
  "Room_Description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
  "Price": "€292,40"
}, {
  "Room_id": 4,
  "Hotel_id": 4,
  "Room_Type": 4,
  "Room_Img": "http://dummyimage.com/194x214.png/dddddd/000000",
  "Room_Description": "Curabitur convallis.",
  "Price": "€653,95"
}, {
  "Room_id": 5,
  "Hotel_id": 5,
  "Room_Type": 4,
  "Room_Img": "http://dummyimage.com/175x161.bmp/dddddd/000000",
  "Room_Description": "Sed vel enim sit amet nunc viverra dapibus.",
  "Price": "€450,62"
}, {
  "Room_id": 6,
  "Hotel_id": 6,
  "Room_Type": 5,
  "Room_Img": "http://dummyimage.com/198x231.jpg/dddddd/000000",
  "Room_Description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "Price": "€727,12"
}, {
  "Room_id": 7,
  "Hotel_id": 7,
  "Room_Type": 4,
  "Room_Img": "http://dummyimage.com/123x247.png/cc0000/ffffff",
  "Room_Description": "Nunc rhoncus dui vel sem. Sed sagittis.",
  "Price": "€691,35"
}, {
  "Room_id": 8,
  "Hotel_id": 8,
  "Room_Type": 2,
  "Room_Img": "http://dummyimage.com/135x124.jpg/5fa2dd/ffffff",
  "Room_Description": "Mauris sit amet eros.",
  "Price": "€438,78"
}, {
  "Room_id": 9,
  "Hotel_id": 9,
  "Room_Type": 2,
  "Room_Img": "http://dummyimage.com/179x206.png/5fa2dd/ffffff",
  "Room_Description": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
  "Price": "€68,53"
}, {
  "Room_id": 10,
  "Hotel_id": 10,
  "Room_Type": 2,
  "Room_Img": "http://dummyimage.com/143x151.png/5fa2dd/ffffff",
  "Room_Description": "In hac habitasse platea dictumst.",
  "Price": "€131,27"
}]
)

db.Room.find()

db.Check_In.insert(
[{
  "Check_In_id": 1,
  "Room_id": 1,
  "Customer_id": 1,
  "Reservation_id": 1
}, {
  "Check_In_id": 2,
  "Room_id": 2,
  "Customer_id": 2,
  "Reservation_id": 2
}, {
  "Check_In_id": 3,
  "Room_id": 3,
  "Customer_id": 3,
  "Reservation_id": 3
}, {
  "Check_In_id": 4,
  "Room_id": 4,
  "Customer_id": 4,
  "Reservation_id": 4
}, {
  "Check_In_id": 5,
  "Room_id": 5,
  "Customer_id": 5,
  "Reservation_id": 5
}, {
  "Check_In_id": 6,
  "Room_id": 6,
  "Customer_id": 6,
  "Reservation_id": 6
}, {
  "Check_In_id": 7,
  "Room_id": 7,
  "Customer_id": 7,
  "Reservation_id": 7
}, {
  "Check_In_id": 8,
  "Room_id": 8,
  "Customer_id": 8,
  "Reservation_id": 8
}, {
  "Check_In_id": 9,
  "Room_id": 9,
  "Customer_id": 9,
  "Reservation_id": 9
}, {
  "Check_In_id": 10,
  "Room_id": 10,
  "Customer_id": 10,
  "Reservation_id": 10
}]
)

db.Check_In.find()

db.Check_Out.insert(
[{
  "Check_Out_id": 1,
  "Room_id": 1,
  "Customer_id": 1,
  "Payment_id": 1
}, {
  "Check_Out_id": 2,
  "Room_id": 2,
  "Customer_id": 2,
  "Payment_id": 2
}, {
  "Check_Out_id": 3,
  "Room_id": 3,
  "Customer_id": 3,
  "Payment_id": 3
}, {
  "Check_Out_id": 4,
  "Room_id": 4,
  "Customer_id": 4,
  "Payment_id": 4
}, {
  "Check_Out_id": 5,
  "Room_id": 5,
  "Customer_id": 5,
  "Payment_id": 5
}, {
  "Check_Out_id": 6,
  "Room_id": 6,
  "Customer_id": 6,
  "Payment_id": 6
}, {
  "Check_Out_id": 7,
  "Room_id": 7,
  "Customer_id": 7,
  "Payment_id": 7
}, {
  "Check_Out_id": 8,
  "Room_id": 8,
  "Customer_id": 8,
  "Payment_id": 8
}, {
  "Check_Out_id": 9,
  "Room_id": 9,
  "Customer_id": 9,
  "Payment_id": 9
}, {
  "Check_Out_id": 10,
  "Room_id": 10,
  "Customer_id": 10,
  "Payment_id": 10
}]
)

db.Check_Out.find()

db.Bill.insert(
[{
  "Invoice_No": 1,
  "Room_id": 1,
  "Customer_id": 1,
  "Check_In_id": 1
}, {
  "Invoice_No": 2,
  "Room_id": 2,
  "Customer_id": 2,
  "Check_In_id": 2
}, {
  "Invoice_No": 3,
  "Room_id": 3,
  "Customer_id": 3,
  "Check_In_id": 3
}, {
  "Invoice_No": 4,
  "Room_id": 4,
  "Customer_id": 4,
  "Check_In_id": 4
}, {
  "Invoice_No": 5,
  "Room_id": 5,
  "Customer_id": 5,
  "Check_In_id": 5
}, {
  "Invoice_No": 6,
  "Room_id": 6,
  "Customer_id": 6,
  "Check_In_id": 6
}, {
  "Invoice_No": 7,
  "Room_id": 7,
  "Customer_id": 7,
  "Check_In_id": 7
}, {
  "Invoice_No": 8,
  "Room_id": 8,
  "Customer_id": 8,
  "Check_In_id": 8
}, {
  "Invoice_No": 9,
  "Room_id": 9,
  "Customer_id": 9,
  "Check_In_id": 9
}, {
  "Invoice_No": 10,
  "Room_id": 10,
  "Customer_id": 10,
  "Check_In_id": 10
}]
)

db.Bill.find()

db.Payment.insert(
[{
  "Payment_id": 1,
  "Customer_id": 1,
  "Invoice_No": 1,
  "Card_Type": "jcb",
  "Full_Name": "Cris Cord",
  "Card_No": "3568909979362613",
  "Amount": "€703,04",
  "CVV": 810
}, {
  "Payment_id": 2,
  "Customer_id": 2,
  "Invoice_No": 2,
  "Card_Type": "laser",
  "Full_Name": "Afton Nashe",
  "Card_No": "670689354990246299",
  "Amount": "€326,73",
  "CVV": 720
}, {
  "Payment_id": 3,
  "Customer_id": 3,
  "Invoice_No": 3,
  "Card_Type": "maestro",
  "Full_Name": "Griselda MacAloren",
  "Card_No": "676387875303995034",
  "Amount": "€616,26",
  "CVV": 457
}, {
  "Payment_id": 4,
  "Customer_id": 4,
  "Invoice_No": 4,
  "Card_Type": "visa-electron",
  "Full_Name": "Yoko Searsby",
  "Card_No": "4175001214814369",
  "Amount": "€381,11",
  "CVV": 729
}, {
  "Payment_id": 5,
  "Customer_id": 5,
  "Invoice_No": 5,
  "Card_Type": "jcb",
  "Full_Name": "Ade Kittoe",
  "Card_No": "3569940608716886",
  "Amount": "€696,42",
  "CVV": 620
}, {
  "Payment_id": 6,
  "Customer_id": 6,
  "Invoice_No": 6,
  "Card_Type": "china-unionpay",
  "Full_Name": "Vance Grigoryev",
  "Card_No": "560225464419903695",
  "Amount": "€288,58",
  "CVV": 335
}, {
  "Payment_id": 7,
  "Customer_id": 7,
  "Invoice_No": 7,
  "Card_Type": "jcb",
  "Full_Name": "Ly Guinn",
  "Card_No": "3579514590795592",
  "Amount": "€901,99",
  "CVV": 891
}, {
  "Payment_id": 8,
  "Customer_id": 8,
  "Invoice_No": 8,
  "Card_Type": "china-unionpay",
  "Full_Name": "Delaney Zielinski",
  "Card_No": "56022158884425283",
  "Amount": "€192,72",
  "CVV": 881
}, {
  "Payment_id": 9,
  "Customer_id": 9,
  "Invoice_No": 9,
  "Card_Type": "jcb",
  "Full_Name": "Lusa Crocken",
  "Card_No": "3545228702984157",
  "Amount": "€434,14",
  "CVV": 882
}, {
  "Payment_id": 10,
  "Customer_id": 10,
  "Invoice_No": 10,
  "Card_Type": "americanexpress",
  "Full_Name": "Florencia Shewery",
  "Card_No": "337941695028349",
  "Amount": "€221,90",
  "CVV": 137
}]
)

db.Payment.find()

db.Customer.find(
{
   "Customer_id": 8,
}
)