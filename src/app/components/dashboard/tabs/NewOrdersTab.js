import AcceptedOrders from '../orders/AcceptedOrders';
import CompletedOrders from '../orders/CompletedOrders';
import NewOrders from '../orders/NewOrders';
import OutForDeliveryOrders from '../orders/OutForDeliveryOrders';
import ReadyOrders from '../orders/ReadyOrders';

export default function NewOrdersTab() {
  return (
    <div>
      <NewOrders />
      <AcceptedOrders />
      <ReadyOrders />
      <OutForDeliveryOrders />
      <CompletedOrders />
    </div>
  );
}
