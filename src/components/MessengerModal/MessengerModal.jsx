export function MessengerModal({ isOpen, onClose, messengers }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h3 className="text-2xl font-bold text-[#0A2466] mb-6 font-helvetica">
          Выберите мессенджер
        </h3>
        <div className="space-y-4">
          {messengers.map((messenger) => (
            <a
              key={messenger.name}
              href={messenger.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200 hover:border-[#00CED1]"
            >
              <img
                src={messenger.icon}
                alt={messenger.name}
                className="w-12 h-12"
              />
              <span className="text-lg font-medium text-[#2C2C2C]">
                {messenger.name}
              </span>
            </a>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-[#2C2C2C]"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
