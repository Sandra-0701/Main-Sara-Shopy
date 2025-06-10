import ActionButtons from "./components/ActionButtons";
import BackLink from "./components/BackLink";
import DeliveryAddress from "./components/DeliveryAddress";
import OrderInfo from "./components/OrderInfo";
import OrderItems from "./components/OrderItems";
import PaymentInfo from "./components/PaymentInfo";


export default function OrderDetails({ params = {} }) {
  const orderId = params.orderId;

  return (
    <main className="min-h-[calc(100vh-130px)] py-[30px] bg-gray-50">
      <div className="container mx-auto px-4">
        <BackLink href="/orders" text="Back to Order History" />

        <h1 className="text-2xl font-bold text-gray-900 mb-5">Order Details</h1>

        <OrderInfo orderId={orderId} />
        <OrderItems />
        <DeliveryAddress />
        <PaymentInfo />
        <ActionButtons />
      </div>
    </main>
  );
}
