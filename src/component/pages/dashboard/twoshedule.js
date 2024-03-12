import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import './schedule.css';
import { Link } from "react-router-dom";
export default function Twoschedule() {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const states = {
        "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],
        "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
        "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
        "Bihar": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
       "Chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
       "Goa": ["North Goa","South Goa"],
        "Gujarat": ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
         "Haryana": ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
         "HimachalPradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
         "JammuKashmir":["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kargil","Kathua","Kishtwar","Kulgam","Kupwara","Leh","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
         "Jharkhand":["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"],
        " Karnataka":["Bagalkot","Bangalore Rural","Bangalore Urban","Belgaum","Bellary","Bidar","Vijayapura","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Yadgir"],
       " Kerala " :["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
       "MadhyaPradesh ": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna",
       "Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
       "Maharashtra":["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
       "Manipur" : ["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
       "Meghalaya" :["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
       "Mizoram" :["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
       "Nagaland" :["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
       "Punjab" :["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"],
       "Rajasthan" :["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
       "Sikkim" : ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
       "TamilNadu" : ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],
       "Telangana" : ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar","Jogulamba","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahbubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"],
       "Tripura" :["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
       "UttarPradesh" : ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
       "Uttarakhand"  : ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri","Pithoragarh","Rudraprayag","Tehri","Udham Singh Nagar","Uttarkashi"],
       "WestBengal" : ["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"],
       "AndamanNicobar" : ["Nicobar","North Middle Andaman","South Andaman"],
       "Chandigarh" : ["Chandigarh"],
       "DadraHaveli" : ["Dadra Nagar Haveli"],
       "DamanDiu" : ["Daman","Diu"],
       "Delhi" : ["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
       "Lakshadweep" : ["Lakshadweep"],
       "Puducherry" :["Karaikal","Mahe","Puducherry","Yanam"]
    };
    const indianLanguages =["Tamil","Hindi","English","Telugu", "Urdu", "Gujarati", "Kannada", "Odia", "Punjabi"];
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedDistrict('');
    };

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };
    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };
  return (
    <div>
      <div className="container">
        <div className="col-lg-1">&nbsp;</div>
        <div
          className="col-lg-10 border w-100 col-md-10 "
          style={{ backgroundColor: "#f3f3f3", borderRadius: "10px" }}
        >
          <h4
            className="text-center mt-2"
            style={{ fontSize: "18px", fontWeight: "900", lineHeight: "1.5" }}
          >
            Signup form for Lawyer Users
          </h4>
          <h6
            className="text-center mt-2"
            style={{ fontSize: "15px", fontWeight: "400", lineHeight: "1.5" }}
          >
            Fill in the Information Carefully
          </h6>
          <div className="ml-5 px-4">
            <h3
              className="text-left mt-2  text-capitalize text-center-mobile"
              style={{ fontSize: "20px", fontWeight: "900", lineHeight: "1.5" }}
            >
              Lawyer personal Data
            </h3>
          </div>
        
          <div className="row mt-4 p-2">
            <div className="col-md-3 px-4 mt-2">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Address</label>
                <input type="text" className="input-field" placeholder="enter your Address" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />

            </div>
            <div className="col-md-3 px-4 mt-2">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>City/Town</label>
                <input type="text" className="input-field" placeholder="City or Town" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
            <div className="col-md-3 px-4">
              <label htmlFor="state" style={{ fontSize: '14px',fontWeight: '400' ,lineHeight: '1.5'}}>State</label><br/>
            <select id="state" value={selectedState} onChange={handleStateChange}>
                <option value="" style={{ fontSize: '14px',fontWeight: '400' ,lineHeight: '1.5'}}>Select State</option>
                {Object.keys(states).map(state => (
                    <option key={state} value={state}>{state}</option>
                ))}
            </select>
            </div>

              <div className="col-md-3 px-4">
                <label htmlFor="district" style={{ fontSize: '14px',fontWeight: '400' ,lineHeight: '1.5'}}>District</label><br/>
            <select id="district" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
                <option value="">District</option>
                {selectedState && states[selectedState].map(district => (
                    <option key={district} value={district}>{district}</option>
                ))}
            </select>
              </div>
        
          </div>
          <div className="row mt-4">
            <div className="col-md-3 px-4 mt-2">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Office postal code</label>
                <input type="email" className="input-field" placeholder="enter postal code" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />

            </div>
            <div className="col-md-3 px-4 ">
                            <label htmlFor="language" style={{ fontSize: '14px', fontWeight: '400', lineHeight: '1.5' }}>Language Spoken</label><br />
                            <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                                <option value="">Select Language</option>
                                {indianLanguages.map(language => (
                                    <option key={language} value={language}>{language}</option>
                                ))}
                            </select>
                        </div>
            <div className="col-md-3 px-4 mt-2">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Experience Years</label>
                <input type="text" className="input-field" placeholder="Experience Years" style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
            <div className="col-md-3 px-4 mt-2">
            <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Education</label>
                <input type="text" className="input-field"placeholder="Education"  style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
               
            </div>
          </div>
          <div className="row mt-4 p-3 ">
          <label style={{ fontSize: "14px", fontWeight: "400", lineHeight: "1.5" }}>Date of Birth</label>
                <br />
                <input type="date" className=""  style={{ border: "none", borderBottom: "2px solid #e2e4e5", width: "100%", backgroundColor: "transparent" , outline: "none"}} />
          </div>
          <div className="mb-3 mt-4 px-4 text-center">
                
          <Link to="/schedule"> <button type="button" className=" btn text-white" style={{ background: "#ffc32a", fontSize: "16px", fontWeight: "500" }}>
                    Register<span className="" style={{ marginLeft: "30px", width: "12px", height: "8px", top: "8px", left: "6px" }}>
                      <FaArrowRightLong />
                    </span>
                  </button></Link>
             
              </div>
        </div>
        <div className="col-lg-1">&nbsp;</div>
      </div>
    </div>
  );
}
