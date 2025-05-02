import Table from '../../Table';

const sampleData = [
  {
    orderid: '#111',
    name: 'John H.',
    location: '123, Main Street...',
    amount: '$20.99',
    status: 'Delivered',
    deliveredOn: '24 Sep 2025'
  },
];

const columns = ['OrderId', 'Name', 'Location', 'Amount', 'Status', 'Delivered On'];

export default function CompletedOrders() {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Completed Orders</h3>
      <Table
        data={sampleData}
        columns={columns}
        links={['/order/view/111']}
        currentPage={1}
        totalPages={1}
        onPageChange={(page) => console.log('Go to page:', page)}
      />
    </div>
  );
}
