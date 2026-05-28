import { useState } from "react";
import { Play, X, Video, Plus } from "lucide-react";

export default function ReviewsSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState(null);
  const [reviewerName, setReviewerName] = useState("");

  const reviews = [
    {
      id: 1,
      name: "Дмитрий К.",
      videoUrl:
        "https://rutuberu/play/embed/video/private/41ac26bb279b2a460c9b12a21fde6018/?p=aCHobrPBvYS5E3EtoM8Kig",
      thumbnail: "https://ucarecdn.com/68df33eb-507c-413c-8c76-fe7274d80aec/",
      date: "15 марта 2025",
    },
  ];

  const openVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setShowVideoModal(true);
  };

  const handleRecordReview = () => {
    setShowRecordModal(true);
  };

  const handleSubmitReview = async () => {
    if (!reviewerName.trim()) {
      alert("Пожалуйста, введите ваше имя");
      return;
    }

    setRecordingStatus(
      "Функция записи отзыва будет доступна в ближайшее время",
    );

    // Here will be video recording logic
    setTimeout(() => {
      setShowRecordModal(false);
      setRecordingStatus(null);
      setReviewerName("");
    }, 3000);
  };

  return (
    <section
      id="reviews"
      className="relative py-24 bg-gradient-to-br from-[#2C2C2C] to-[#0A2466]"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-[#00CED1]/20 border border-[#00CED1] rounded-full">
              <p className="text-[#00CED1] font-bold text-sm font-helvetica">
                РЕАЛЬНЫЕ ИСТОРИИ
              </p>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-helvetica">
            Отзывы инвесторов
            <br />
            <span className="text-[#00CED1]">о сотрудничестве</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Наши клиенты делятся опытом успешных инвестиций
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-gradient-to-br from-[#0A2466] to-[#2C2C2C] rounded-3xl overflow-hidden border-2 border-[#00CED1]/30 hover:border-[#00CED1] transition-all cursor-pointer"
              style={{ aspectRatio: "9/16" }}
              onClick={() => openVideo(review.videoUrl)}
            >
              {/* Mobile Device Frame */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Video Thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/20 to-[#0A2466]/20" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#00CED1]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="text-white fill-white ml-1" size={32} />
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h4 className="text-lg font-bold mb-1 font-helvetica">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add Review Card */}
          <div
            className="group relative bg-gradient-to-br from-[#00CED1]/10 to-[#0A2466]/10 rounded-3xl overflow-hidden border-2 border-dashed border-[#00CED1]/50 hover:border-[#00CED1] hover:bg-[#00CED1]/20 transition-all cursor-pointer flex items-center justify-center"
            style={{ aspectRatio: "9/16" }}
            onClick={handleRecordReview}
          >
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#00CED1]/20 rounded-full flex items-center justify-center group-hover:bg-[#00CED1]/30 transition-all">
                <Plus className="text-[#00CED1]" size={40} />
              </div>
              <h4 className="text-xl font-bold mb-2 font-helvetica">
                Оставить отзыв
              </h4>
              <p className="text-sm text-gray-400 font-inter">
                Запишите видеоотзыв прямо с сайта
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-white/5 backdrop-blur-sm border border-[#00CED1]/20 rounded-2xl p-8">
          <p className="text-lg text-gray-300 font-inter">
            Ваш отзыв появится здесь после модерации
          </p>
        </div>
      </div>

      {/* Video Modal с автовоспроизведением */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <X size={28} className="text-white" />
            </button>
            <div
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl"
              style={{ paddingBottom: "177.78%", maxHeight: "80vh" }}
            >
              <iframe
                src={`${currentVideo}${
                  currentVideo.includes("?") ? "&" : "?"
                }autoplay=1`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Record Review Modal остается без изменений */}
      {showRecordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowRecordModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X size={20} className="text-[#2C2C2C]" />
            </button>

            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00CED1] to-[#0A2466] rounded-full flex items-center justify-center">
                  <Video className="text-white" size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2466] mb-2 text-center font-helvetica">
                Записать видеоотзыв
              </h3>
              <p className="text-[#2C2C2C] mb-6 text-center font-inter">
                Поделитесь вашим опытом инвестирования
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] focus:border-transparent text-[#2C2C2C]"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <Video className="mx-auto mb-3 text-gray-400" size={48} />
                  <p className="text-sm text-gray-600 font-inter">
                    Функция записи видео будет доступна в ближайшее время
                  </p>
                </div>

                <button
                  onClick={handleSubmitReview}
                  className="w-full py-4 bg-gradient-to-r from-[#00CED1] to-[#0A2466] text-white font-bold rounded-lg hover:shadow-lg transition-all font-helvetica"
                >
                  Отправить на модерацию
                </button>

                {recordingStatus && (
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-center text-sm">
                    {recordingStatus}
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  Отзыв будет опубликован после проверки модератором
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
