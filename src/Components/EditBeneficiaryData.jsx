import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditBeneficiaryData = ({ setLoading }) => {
  const API_BASE_URL = "http://127.0.0.1:8000/api/beneficiaries";
  const { id } = useParams();
  const navigate = useNavigate();

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
    need: "",
    occupation: "",
  });

  useEffect(() => {
    const fetchBeneficiary = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/${id}/`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setFormData(response.data);
      } catch (error) {
        toast.error("Failed to fetch beneficiary data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiary();
  }, [id, setLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to update");
      toast.success("Beneficiary updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update beneficiary.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this beneficiary?"))
      return setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/${id}/`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete");
      toast.success("Beneficiary deleted successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete beneficiary.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Beneficiary
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
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
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
              <label className="block text-gray-700 font-bold mb-2">
                Amount Received
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                className="border rounded w-full py-2 px-3"
                placeholder="Amount given"
                required
                value={formData.amount}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                State Of Origin
              </label>
              <input
                type="text"
                id="stateOfOrigin"
                name="stateOfOrigin"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="State Of Origin"
                required
                value={formData.stateOfOrigin}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
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
              <label className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
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
              <label className="block text-gray-700 font-bold mb-2">
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="border rounded w-full py-2 px-3"
                placeholder="Beneficiary account number"
                value={formData.accountNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="border rounded w-full py-2 px-3"
                placeholder="Name of bank"
                value={formData.bankName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Mode of Payment
              </label>
              <input
                type="text"
                id="modeOfPayment"
                name="modeOfPayment"
                className="border rounded w-full py-2 px-3"
                placeholder="Mode of payment"
                value={formData.modeOfPayment}
                onChange={handleChange}
              />
            </div>

            <h3 className="text-2xl mb-5">Administrator Info</h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
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
              <label className="block text-gray-700 font-bold mb-2">
                Payment Officer
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
              <label className="block text-gray-700 font-bold mb-2">
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
                Update Beneficiary
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                onClick={handleDelete}
              >
                Delete Beneficiary
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditBeneficiaryData;
