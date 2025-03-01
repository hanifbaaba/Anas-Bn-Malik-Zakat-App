import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBeneficiaryData = ({ setBeneficiaries }) => {
  const API_BASE_URL = "http://127.0.0.1:8000";

  const [formData, setFormData] = useState({
    name: "",
    contactPhone: "",
    address: "",
    stateOfOrigin: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
    amount: "",
    ninNumber: "",
    administratorName: "",
    modeOfPayment: "",
    paymentOfficer: "",
    remarks: "",
    gender: "",
    occupation: "",
    need: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/beneficiaries/`);
        if (!response.ok) throw new Error("Failed to fetch beneficiaries");

        const data = await response.json();
        setBeneficiaries(data);
      } catch (error) {
        console.error("Error fetching beneficiaries:", error);
      }
    };
    fetchBeneficiaries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/beneficiaries/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to add beneficiary");
      toast.success("Beneficiary added successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add beneficiary. Please try again.");
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Beneficiary
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Beneficiary Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Type your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="border rounded w-full py-2 px-3"
                placeholder="Type your address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Amount received
              </label>
              <input
                id="amount"
                type="text"
                placeholder="Amount given"
                name="amount"
                className="border rounded w-full py-2 px-3"
                required
                value={formData.amount}
                onChange={handleChange}
              ></input>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                State Of Origin
              </label>
              <select
                type="text"
                id="stateOfOrigin"
                name="stateOfOrigin"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="State Of Origin"
                required
                value={formData.stateOfOrigin}
                onChange={handleChange}
              >
                <option selected>Choose</option>
                <option>ABUJA FCT</option>
                <option>ABIA</option>
                <option>ADAMAWA</option>
                <option>AKWA IBOM</option>
                <option>ANAMBRA</option>
                <option>BAUCHI</option>
                <option>BAYELSA</option>
                <option>BENUE</option>
                <option>BORNO</option>
                <option>CROSS RIVER</option>
                <option>DELTA</option>
                <option>EBONYI</option>
                <option>EDO</option>
                <option>EKITI</option>
                <option>ENUGU</option>
                <option>GOMBE</option>
                <option>IMO</option>
                <option>JIGAWA</option>
                <option>KADUNA</option>
                <option>KANO</option>
                <option>KATSINA</option>
                <option>KEBBI</option>
                <option>KOGI</option>
                <option>KWARA</option>
                <option>LAGOS</option>
                <option>NASSARAWA</option>
                <option>NIGER</option>
                <option>OGUN</option>
                <option>ONDO</option>
                <option>OSUN</option>
                <option>OYO</option>
                <option>PLATEAU</option>
                <option>RIVERS</option>
                <option>SOKOTO</option>
                <option>TARABA</option>
                <option>YOBE</option>
                <option>ZAMFARA</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="ninNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                NIN Number
              </label>
              <input
                type="text"
                id="ninNumber"
                name="ninNumber"
                className="border rounded w-full py-2 px-3"
                placeholder="NIN Number for applicants"
                required
                value={formData.ninNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactPhone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Phone Number"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                Gender
              </label>

              <select
                type="text"
                id="gender"
                name="gender"
                className="border rounded w-full py-2 px-3"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option selected>Choose</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="occupation"
                className="block text-gray-700 font-bold mb-2"
              >
                Occupation
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                className="border rounded w-full py-2 px-3"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="need"
                className="block text-gray-700 font-bold mb-2"
              >
                Need
              </label>
              <input
                type="text"
                id="need"
                name="need"
                className="border rounded w-full py-2 px-3"
                placeholder="Need"
                value={formData.need}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="accountName"
                className="block text-gray-700 font-bold mb-2"
              >
                Account Name
              </label>
              <input
                type="text"
                id="accountName"
                name="accountName"
                className="border rounded w-full py-2 px-3"
                placeholder="Beneficiary account name"
                value={formData.accountName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="accountNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="border rounded w-full py-2 px-3"
                placeholder="Benificiary account number"
                value={formData.accountNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="bankName"
                className="block text-gray-700 font-bold mb-2"
              >
                Bank Name
              </label>
              <select
                type="text"
                id="bankName"
                name="bankName"
                className="border rounded w-full py-2 px-3"
                placeholder="Name of bank"
                value={formData.bankName}
                onChange={handleChange}
              >
                <option selected>Choose</option>
                <option value="access">Access Bank</option>
                <option value="citibank">Citibank</option>
                <option value="diamond">Diamond Bank</option>
                <option value="ecobank">Ecobank</option>
                <option value="fidelity">Fidelity Bank</option>
                <option value="firstbank">First Bank</option>
                <option value="fcmb">First City Monument Bank (FCMB)</option>
                <option value="gtb">Guaranty Trust Bank (GTB)</option>
                <option value="heritage">Heritage Bank</option>
                <option value="keystone">Keystone Bank</option>
                <option value="polaris">Polaris Bank</option>
                <option value="providus">Providus Bank</option>
                <option value="stanbic">Stanbic IBTC Bank</option>
                <option value="standard">Standard Chartered Bank</option>
                <option value="sterling">Sterling Bank</option>
                <option value="suntrust">Suntrust Bank</option>
                <option value="union">Union Bank</option>
                <option value="uba">United Bank for Africa (UBA)</option>
                <option value="unity">Unity Bank</option>
                <option value="wema">Wema Bank</option>
                <option value="zenith">Zenith Bank</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="modeOfPayment"
                className="block text-gray-700 font-bold mb-2"
              >
                Mode of payment
              </label>
              <select
                id="modeOfPayment"
                name="modeOfPayment"
                className="border rounded w-full py-2 px-3"
                placeholder="Mode of payment"
                value={formData.modeOfPayment}
                onChange={handleChange}
              >
                <option selected>Choose</option>
                <option value="Bank transfer">Bank Transfer</option>
                <option value="Cash">Cash</option>
              </select>
            </div>

            <h3 className="text-2xl mb-5">Administrator Info</h3>

            <div className="mb-4">
              <label
                htmlFor="administratorName"
                className="block text-gray-700 font-bold mb-2"
              >
                Administrator Name
              </label>
              <input
                type="text"
                id="administratorName"
                name="administratorName"
                className="border rounded w-full py-2 px-3"
                placeholder="Administrator Name"
                value={formData.administratorName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="paymentOfficer"
                className="block text-gray-700 font-bold mb-2"
              >
                Payment officer
              </label>
              <textarea
                id="paymentOfficer"
                name="paymentOfficer"
                rows="4"
                className="border rounded w-full py-2 px-3"
                placeholder="Payment Officer"
                value={formData.paymentOfficer}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="remarks"
                className="block text-gray-700 font-bold mb-2"
              >
                Remarks
              </label>
              <textarea
                id="remarks"
                name="remarks"
                rows="4"
                className="border rounded w-full py-2 px-3"
                placeholder="Remarks"
                value={formData.remarks}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Beneficiary
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddBeneficiaryData;
