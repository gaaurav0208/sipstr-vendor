import Table from '../../Table';

const sampleData = [
  {
    orderid: '#111',
    name: 'John H.',
    location: '123, Main Street...',
    amount: '$20.99',
    deliverytime: '3PM–4PM(EDT)',
  },
];

const columns = ['OrderId', 'Name', 'Location', 'Amount', 'DeliveryTime'];

export default function AcceptedOrdersOrders() {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">New Orders</h3>
      <Table
        data={sampleData}
        columns={columns}
        actionButtons={[{ label: 'Packed' }]}
        links={['/order/view/111']}
        currentPage={1}
        totalPages={1}
        onPageChange={(page) => console.log('Go to page:', page)}
      />
    </div>
  );
}
