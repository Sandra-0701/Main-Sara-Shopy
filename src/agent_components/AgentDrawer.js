export default function AgentDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl z-50">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Agent Menu</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <ul>
          <li className="py-2 hover:bg-gray-100">Dashboard</li>
          <li className="py-2 hover:bg-gray-100">Orders</li>
          <li className="py-2 hover:bg-gray-100">Analytics</li>
        </ul>
      </div>
    </div>
  );
}