import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Components/Spinner";
import AddBeneficiaryData from "./Components/AddBeneficiaryData";
import EditBeneficiaryData from "./Components/EditBeneficiaryData";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://anas-bn-malik-django-app.onrender.com/api/";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}beneficiaries`);
        if (!response.ok) {
          throw new Error("Failed to fetch beneficiaries");
        }
        const data = await response.json();
        setBeneficiaries(data);
      } catch (error) {
        console.error("Error fetching beneficiaries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeneficiaries();
  }, []);

  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <ToastContainer />
        <h1 className="text-center text-2xl font-bold mb-6">
          Welcome to Anas Bn Malik Islamic Centre Zakat App
        </h1>

        <div className="text-center mb-8">
          <Link
            to="/add-beneficiary"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Add Beneficiary
          </Link>
        </div>

        <h2 className="text-xl font-semibold mb-4">Beneficiaries List</h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="space-y-4">
            {beneficiaries.length === 0 ? (
              <p className="text-gray-500">No beneficiaries added yet.</p>
            ) : (
              beneficiaries.map((beneficiary, index) => (
                <div key={beneficiary.id} className="p-4 border rounded shadow">
                  <h3 className="font-bold text-lg">{beneficiary.name}</h3>
                  <p className="text-gray-600">
                    <strong>Amount:</strong> {beneficiary.amount}
                  </p>

                  {expandedIndex === index ? (
                    <>
                      <p className="text-gray-600">
                        <strong>State:</strong> {beneficiary.state_of_origin}
                      </p>
                      <p className="text-gray-600">
                        <strong>Phone:</strong> {beneficiary.contact_phone}
                      </p>
                      <p className="text-gray-600">
                        <strong>Address:</strong> {beneficiary.address}
                      </p>
                      <p className="text-gray-600">
                        <strong>Bank:</strong> {beneficiary.bank_name}
                      </p>
                      <p className="text-gray-600">
                        <strong>Account Name:</strong>{" "}
                        {beneficiary.account_name}
                      </p>
                      <p className="text-gray-600">
                        <strong>Account Number:</strong>{" "}
                        {beneficiary.account_number}
                      </p>
                      <p className="text-gray-600">
                        <strong>NIN:</strong> {beneficiary.nin_number}
                      </p>
                      <div className="mt-2 flex space-x-2">
                        <button
                          className="mt-2 bg-red-500 text-white px-4 py-1 rounded-full"
                          onClick={() => setExpandedIndex(null)}
                        >
                          Show Less
                        </button>
                        <Link
                          to={`/edit-beneficiary/${beneficiary.id}`}
                          className=" mt-2 bg-green-500 text-white px-4 py-1 rounded-full"
                        >
                          Edit
                        </Link>
                      </div>
                    </>
                  ) : (
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-full"
                      onClick={() => setExpandedIndex(index)}
                    >
                      Show More
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        <Routes>
          <Route
            path="/add-beneficiary"
            element={<AddBeneficiaryData setBeneficiaries={setBeneficiaries} />}
          />
          <Route
            path="/edit-beneficiary/:id"
            element={<EditBeneficiaryData setLoading={setLoading} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
