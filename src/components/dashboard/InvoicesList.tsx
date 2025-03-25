import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function InvoicesList() {
  const [invoices, setInvoices] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

  // Fetch invoices from Supabase
  useEffect(() => {
    const fetchInvoices = async () => {
      const { data, error } = await supabase.from("invoices").select("*");
      if (error) console.error("Error fetching invoices:", error);
      else setInvoices(data);
    };

    fetchInvoices();
  }, []);

  // Handle form submission to create a new invoice
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("invoices").insert([
      {
        customer_name: customerName,
        amount: parseFloat(amount),
        status: status,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error creating invoice:", error);
      alert("Failed to create invoice.");
    } else {
      setInvoices([...invoices, ...data]); // Update UI with new invoice
      setCustomerName("");
      setAmount("");
      setStatus("pending");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Invoices</h3>

      {/* Invoice Form */}
      <form onSubmit={handleSubmit} className="mb-4 space-y-3">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
        </select>
        <button
          type="submit"
          className="w-full bg-lipa-green text-white p-2 rounded hover:bg-lipa-green/80"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Invoice"}
        </button>
      </form>

      {/* Invoices List */}
      <ul>
        {invoices.length > 0 ? (
          invoices.map((invoice) => (
            <li key={invoice.id} className="border-b py-2 flex justify-between">
              <span className="font-medium">{invoice.customer_name}</span> - ${invoice.amount} - 
              <span className={`text-sm ${invoice.status === "paid" ? "text-green-500" : "text-red-500"}`}>
                {invoice.status}
              </span>
            </li>
          ))
        ) : (
          <p>No invoices found.</p>
        )}
      </ul>
    </div>
  );
}
