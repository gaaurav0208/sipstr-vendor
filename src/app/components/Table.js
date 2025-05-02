import Pagination from './Pagination';
import PrimaryButton from './PrimaryButton';

export default function Table({
  data = [],
  columns = [],
  actionButtons = [],
  links = [],
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
}) {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300 mb-4">
        <thead className="bg-orange-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="text-left px-4 py-2 border-b text-sm capitalize">
                {col}
              </th>
            ))}
            {(actionButtons.length > 0 || links.length > 0) && (
              <th className="text-left px-4 py-2 border-b text-sm">Actions</th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b text-sm">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-2">
                  {row[col.toLowerCase().replace(/\s/g, '')]} {/* Ensure key names match */}
                </td>
              ))}

              {(actionButtons.length > 0 || links.length > 0) && (
                <td className="px-4 py-2 flex gap-2 flex-wrap">
                  {actionButtons.map((action, aIdx) => (
                    <PrimaryButton
                      key={aIdx}
                      className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
                    >
                      {action.label}
                    </PrimaryButton>
                  ))}

                  {links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={typeof link === 'string' ? link : link.href}
                      className="text-blue-500 text-xs underline hover:text-blue-600"
                    >
                      {typeof link === 'string' ? 'View' : link.label}
                    </a>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
