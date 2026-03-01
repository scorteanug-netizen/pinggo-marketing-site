import { cn } from "@/lib/utils";

interface BlogTableProps {
  headers: string[];
  rows: (string | number)[][];
  highlightLastRow?: boolean;
}

export function BlogTable({ headers, rows, highlightLastRow = false }: BlogTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/70">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr className="bg-gray-900 text-left text-white">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-sm font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const isLastRow = rowIndex === rows.length - 1;
            return (
              <tr
                key={`${row[0]}-${rowIndex}`}
                className={cn(
                  "cursor-default transition-colors hover:bg-orange-50",
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50",
                  highlightLastRow && isLastRow && "border-t-2 border-orange-200 bg-orange-50 font-semibold",
                )}
              >
                {row.map((cell, cellIndex) => (
                  <td key={`${cellIndex}-${String(cell)}`} className="px-4 py-3 text-sm text-gray-700">
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
