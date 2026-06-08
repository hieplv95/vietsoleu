import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import './NailTemplateViewer.css'

// Import details for all templates
const templateThemes = {
  'luxe-nails': {
    name: 'Luxe Nails & Spa',
    tagColor: '#d4af37',
    colorHex: '#0d2b1d',
    fontHeading: 'Playfair Display, Georgia, serif',
    fontBody: 'Inter, sans-serif',
    accentColor: '#16432e',
    borderColor: '#d4af37',
    slogan: 'Vẻ Đẹp Quý Phái Chăm Sóc Bởi Chuyên Gia',
    intro: 'Luxe Nails & Spa tự hào là điểm đến cao cấp hàng đầu dành cho giới quý cô thượng lưu. Với không gian xanh ngọc kết hợp nội thất mạ vàng xa hoa, chúng tôi mang tới quy trình làm đẹp an toàn và những mẫu móng đắp gel Signature đẳng cấp hoàng gia.',
    artists: ['Anna Nguyen (Master)', 'Kevin Tran (Senior Artist)', 'Chloe Harper (Art Specialist)'],
    services: [
      { id: 's1', name: 'Gel Manicure Hoàng Gia', desc: 'Sơn gel cao cấp kết hợp dưỡng móng chuyên sâu collagen và nước khoáng.', price: 55.00, priceFormatted: '$55.00' },
      { id: 's2', name: 'Pedicure Signature Gold', desc: 'Ngâm chân thảo dược, tẩy tế bào chết muối vàng 24k, đắp mặt nạ giữ ẩm.', price: 75.00, priceFormatted: '$75.00' },
      { id: 's3', name: 'Acrylic Gel Extensions VIP', desc: 'Nối móng đắp bột phom chuẩn châu Âu đính đá Swarovski cao cấp.', price: 120.00, priceFormatted: '$120.00' },
      { id: 's4', name: 'Nail Art Vẽ Nghệ Thuật (Bộ)', desc: 'Vẽ hoa văn nổi, đắp nhũ ẩn hoặc vẽ cọ nét tinh tế bởi Master.', price: 40.00, priceFormatted: '$40.00' }
    ]
  },
  'glow-studio': {
    name: 'Glow Studio',
    tagColor: '#ff7a90',
    colorHex: '#fff5f6',
    fontHeading: 'Outfit, sans-serif',
    fontBody: 'Plus Jakarta Sans, sans-serif',
    accentColor: '#ffe4e7',
    borderColor: '#ff7a90',
    slogan: 'Tỏa Sáng Theo Phong Cách Riêng Của Bạn',
    intro: 'Nơi tập hợp những xu hướng nail art trẻ trung, năng động và thời thượng nhất của giới trẻ. Sử dụng 100% dòng sơn cao cấp Hàn Quốc không chứa hóa chất độc hại, thân thiện tuyệt đối với móng tay của bạn.',
    artists: ['Mimi Le (Trend Leader)', 'Sophia Pham (Nail Artist)'],
    services: [
      { id: 's1', name: 'Glow Basic Gel Polish', desc: 'Làm sạch da móng sâu và sơn gel bóng bền màu 4 tuần.', price: 35.00, priceFormatted: '$35.00' },
      { id: 's2', name: 'Trendy Korean Nail Art', desc: 'Vẽ cọ mảnh phong cách Hàn Quốc, đính charms cute dễ thương.', price: 65.00, priceFormatted: '$65.00' },
      { id: 's3', name: 'Overlay Gel Protection', desc: 'Đắp một lớp gel dẻo gia cố móng mỏng yếu trước khi sơn màu.', price: 45.00, priceFormatted: '$45.00' },
      { id: 's4', name: 'Glitter & Chrome Accent', desc: 'Chà bột gương hologram hoặc rắc kim tuyến mịn tạo hiệu ứng bắt sáng.', price: 20.00, priceFormatted: '$20.00' }
    ]
  },
  'zen-garden': {
    name: 'Zen Garden Nails',
    tagColor: '#5a785a',
    colorHex: '#f4f6f0',
    fontHeading: 'Lora, Georgia, serif',
    fontBody: 'Lora, sans-serif',
    accentColor: '#e3e8dc',
    borderColor: '#8fa88f',
    slogan: 'Thư Thái Thân Tâm, Nâng Niu Đôi Bàn Tay',
    intro: 'Một góc trú ẩn bình yên thoát khỏi xô bồ phố thị. Zen Garden kết hợp dịch vụ làm sạch móng chuyên nghiệp với liệu trình thảo mộc, hương liệu hoa nhài tự nhiên và tiếng nhạc thiền nhẹ nhàng cho bạn cảm giác tái tạo năng lượng hoàn toàn.',
    artists: ['Thiên Hương (Therapist)', 'Linh Đan (Organic Specialist)'],
    services: [
      { id: 's1', name: 'Manicure Thảo Dược Cổ Truyền', desc: 'Chăm sóc móng kết hợp ngâm nước thảo mộc sả chanh gừng tươi.', price: 40.00, priceFormatted: '$40.00' },
      { id: 's2', name: 'Pedicure Ngâm Muối Khoáng Zen', desc: 'Ngâm chân thảo mộc hoa cúc, massage ấn huyệt đùi chân thư giãn.', price: 60.00, priceFormatted: '$60.00' },
      { id: 's3', name: 'Organic Gel Polish', desc: 'Sơn gel dòng thuần chay (Vegan) cực kỳ an toàn cho mẹ bầu và trẻ nhỏ.', price: 50.00, priceFormatted: '$50.00' },
      { id: 's4', name: 'Paraffin Wax Treatment', desc: 'Ủ sáp nóng phục hồi da tay khô ráp và làm giảm đau nhức khớp.', price: 30.00, priceFormatted: '$30.00' }
    ]
  },
  'neon-glitter': {
    name: 'Neon Glitter Bar',
    tagColor: '#bd00ff',
    colorHex: '#0c0214',
    fontHeading: 'Space Grotesk, sans-serif',
    fontBody: 'Space Grotesk, sans-serif',
    accentColor: '#1d0b2e',
    borderColor: '#bd00ff',
    slogan: 'Bold Nails, Wild Heart',
    intro: 'Không dành cho số đông! Neon Glitter Bar là nơi hiện thực hóa những thiết kế móng độc lạ, cực chất với hiệu ứng phản quang, phát sáng trong bóng tối và các phom móng nhọn hầm hố. Hãy để móng tay thể hiện cá tính nổi loạn của bạn.',
    artists: ['DJ Nail King (Art Director)', 'Luna V (Cyber Artist)'],
    services: [
      { id: 's1', name: 'Cyberpunk Neon Gel Set', desc: 'Sơn gel phản quang dạ quang phát sáng dưới ánh đèn UV cực chất.', price: 50.00, priceFormatted: '$50.00' },
      { id: 's2', name: '3D Jelly Nail Art Sculpt', desc: 'Tạo hình gel 3D nổi khối giọt nước, gấu bông hoặc đính khuyên xỏ móng.', price: 85.00, priceFormatted: '$85.00' },
      { id: 's3', name: 'Extreme Stiletto Extensions', desc: 'Nối móng phom nhọn dài siêu mẫu vẽ vân rồng phượng cá tính.', price: 110.00, priceFormatted: '$110.00' },
      { id: 's4', name: 'Airbrush Ombre Effect', desc: 'Phun sơn ombre mờ bằng máy nén tạo hiệu ứng chuyển sắc không tì vết.', price: 40.00, priceFormatted: '$40.00' }
    ]
  },
  'urban-polish': {
    name: 'Urban Polish Lounge',
    tagColor: '#ffffff',
    colorHex: '#111111',
    fontHeading: 'Montserrat, sans-serif',
    fontBody: 'Montserrat, sans-serif',
    accentColor: '#1f1f1f',
    borderColor: '#888888',
    slogan: 'Sự Tối Giản Đầy Kiêu Hãnh',
    intro: 'Thiết kế tối giản sang trọng theo chuẩn mực thời trang hiện đại. Urban Polish Lounge chú trọng vào độ hoàn hảo trong từng đường giũa móng, màu sơn monochrome mờ tinh tế và quy trình tiệt trùng dụng cụ chuẩn y tế.',
    artists: ['Huy Tran (Creative Director)', 'Victoria Wu (Senior Stylist)'],
    services: [
      { id: 's1', name: 'Minimalist Matte Manicure', desc: 'Dọn da khô tỉ mỉ và sơn gel màu đen/nude nhám tối giản thời thượng.', price: 45.00, priceFormatted: '$45.00' },
      { id: 's2', name: 'Geometric Line Art Set', desc: 'Vẽ họa tiết đường thẳng hình học mảnh sắc nét bằng cọ nét chuyên dụng.', price: 70.00, priceFormatted: '$70.00' },
      { id: 's3', name: 'Spa Pedicure Detox Charcoal', desc: 'Pedicure detox bằng than hoạt tính giúp thanh lọc độc tố da chân.', price: 80.00, priceFormatted: '$80.00' }
    ]
  },
  'blossom-boutique': {
    name: 'Blossom Nail Boutique',
    tagColor: '#e07a9b',
    colorHex: '#fdf7f8',
    fontHeading: 'Quicksand, sans-serif',
    fontBody: 'Quicksand, sans-serif',
    accentColor: '#faeaee',
    borderColor: '#e07a9b',
    slogan: 'Nơi Những Đóa Hoa Nở Rộ Trên Đôi Tay',
    intro: 'Ngọt ngào, nhẹ nhàng và nữ tính. Blossom Nail Boutique đón chào bạn bằng ngập tràn hương hoa anh đào dịu mát, những mẫu móng đính hoa khô nghệ thuật tinh xảo cùng dịch vụ chăm sóc nâng niu từ những điều nhỏ bé nhất.',
    artists: ['Mai Vy (Boutique Owner)', 'Dao Le (Florist Artist)'],
    services: [
      { id: 's1', name: 'Blossom Gel Sweet Set', desc: 'Sơn nền thạch hồng đào trong trẻo vẽ hoa cúc hoa hồng nhẹ nhàng.', price: 40.00, priceFormatted: '$40.00' },
      { id: 's2', name: 'Dried Flower Pressed Art', desc: 'Đính hoa khô tự nhiên nhập khẩu Nhật Bản ẩn trong lớp gel thủy tinh.', price: 70.00, priceFormatted: '$70.00' },
      { id: 's3', name: 'Pedicure Relaxing Rose Bath', desc: 'Ngâm chân thư giãn với cánh hoa hồng tươi và tinh dầu hoa oải hương.', price: 65.00, priceFormatted: '$65.00' }
    ]
  },
  'velvet-petals': {
    name: 'Velvet Petals Spa',
    tagColor: '#ff3e6c',
    colorHex: '#26030c',
    fontHeading: 'Lora, sans-serif',
    fontBody: 'Lora, sans-serif',
    accentColor: '#3d0a17',
    borderColor: '#e0b034',
    slogan: 'Nhung Lụa & Quyến Rũ',
    intro: 'Mỗi bộ móng thiết kế tại Velvet Petals Spa là một tác phẩm nghệ thuật quyến rũ mang hơi hướng cổ điển hoàng gia châu Âu. Dòng sơn đỏ nhung sâu thẳm kết hợp với các họa tiết viền ren nhũ vàng tôn vinh nét đẹp kiêu kỳ và quý phái của bạn.',
    artists: ['Lady Rose (Chief Stylist)', 'Elsa Nguyen (Senior Tech)'],
    services: [
      { id: 's1', name: 'Velvet Red Gel Polish VIP', desc: 'Sơn gel mắt mèo hiệu ứng nhung đỏ sang trọng quyến rũ.', price: 50.00, priceFormatted: '$50.00' },
      { id: 's2', name: 'Lace & Gold Foil Artistry', desc: 'Vẽ hoa văn ren thêu nổi tay đắp lá vàng 24k nghệ thuật.', price: 80.00, priceFormatted: '$80.00' },
      { id: 's3', name: 'Luxury Pamper Pedicure Pack', desc: 'Gói chăm sóc chân toàn diện: tẩy tế bào chết, massage đá nóng.', price: 90.00, priceFormatted: '$90.00' }
    ]
  },
  'aura-holistics': {
    name: 'Aura Holistics',
    tagColor: '#967bb6',
    colorHex: '#f6f4fa',
    fontHeading: 'Playfair Display, sans-serif',
    fontBody: 'Plus Jakarta Sans, sans-serif',
    accentColor: '#ebe7f2',
    borderColor: '#ab9cc2',
    slogan: 'Chữa Lành & Năng Lượng Đôi Tay',
    intro: 'Chăm sóc móng không chỉ ở vẻ bề ngoài mà bắt đầu từ sức khỏe bên trong. Aura Holistics sử dụng năng lượng đá muối Himalaya và tinh dầu trị liệu để hồi sinh đôi tay mệt mỏi, mang đến vẻ đẹp khỏe khoắn, tự nhiên nhất.',
    artists: ['Aura Selena (Healer)', 'Jenny Pham (Massage Therapist)'],
    services: [
      { id: 's1', name: 'Aura Chakra Stone Manicure', desc: 'Làm móng kết hợp massage tay bằng đá nóng cẩm thạch chữa lành.', price: 45.00, priceFormatted: '$45.00' },
      { id: 's2', name: 'Mineral Mud Pedicure Pack', desc: 'Ngâm bùn khoáng thiên nhiên, quấn khăn nóng phục hồi khớp chân.', price: 70.00, priceFormatted: '$70.00' },
      { id: 's3', name: 'Non-Toxic Breathable Polish', desc: 'Sơn bóng phục hồi móng chiết xuất keratin và protein thực vật.', price: 35.00, priceFormatted: '$35.00' }
    ]
  },
  'chic-co': {
    name: 'Chic & Co. Studio',
    tagColor: '#111111',
    colorHex: '#fafafa',
    fontHeading: 'Playfair Display, Georgia, serif',
    fontBody: 'Inter, sans-serif',
    accentColor: '#eaeaea',
    borderColor: '#222222',
    slogan: 'Định Nghĩa Lại Sự Thời Thượng',
    intro: 'Nơi khởi nguồn của những bức ảnh check-in móng tay triệu likes trên mạng xã hội. Phong cách thiết kế ấn tượng kết hợp các đường kẻ hình học tối giản tạo nên nét thanh lịch, thu hút mọi ánh nhìn cho chủ nhân sở hữu.',
    artists: ['Chic Designer (Art Boss)', 'Liam Hoang (Fashion Artist)'],
    services: [
      { id: 's1', name: 'Chic French Classic Upgrade', desc: 'Sơn đầu móng kiểu Pháp biến tấu màu sắc đính đá chân mảnh.', price: 45.00, priceFormatted: '$45.00' },
      { id: 's2', name: 'Editorial Photo Art Set', desc: 'Mẫu vẽ thiết kế tự do theo cảm hứng trang phục khách hàng.', price: 85.00, priceFormatted: '$85.00' },
      { id: 's3', name: 'Dry Russian Manicure Gel', desc: 'Mài da khô kiểu Nga siêu sâu bền màu mọc dài không lộ chân.', price: 55.00, priceFormatted: '$55.00' }
    ]
  },
  'tiny-pixie': {
    name: 'Tiny Pixie Nails',
    tagColor: '#00bcd4',
    colorHex: '#fcfaf0',
    fontHeading: 'Quicksand, sans-serif',
    fontBody: 'Quicksand, sans-serif',
    accentColor: '#f7f3da',
    borderColor: '#4dd0e1',
    slogan: 'Những Sắc Màu Cổ Tích Nhỏ Xinh',
    intro: 'Vui vẻ, tươi sáng và tràn đầy năng lượng! Tiny Pixie Nails chuyên vẽ móng hoạt hình (anime art), đắp icon nổi siêu dễ thương và những phối màu pastel ngộ nghĩnh đem đến cho bạn niềm vui bé nhỏ mỗi ngày khi nhìn vào đôi tay của mình.',
    artists: ['Pixie Pinky (Manga Artist)', 'Bella B (Color Specialist)'],
    services: [
      { id: 's1', name: 'Kawaii Cartoon Art Set', desc: 'Vẽ nhân vật hoạt hình nhí nhảnh, đắp hình gấu nổi 3D silicon.', price: 60.00, priceFormatted: '$60.00' },
      { id: 's2', name: 'Candy Pastel Mix Polish', desc: 'Sơn phối 5 màu pastel kẹo ngọt mềm mại xinh xắn.', price: 40.00, priceFormatted: '$40.00' },
      { id: 's3', name: 'Glitter Candy Extensions', desc: 'Nối móng trong suốt rải kim tuyến sắc màu kẹo dẻo.', price: 80.00, priceFormatted: '$80.00' }
    ]
  }
}

export default function NailTemplateViewer() {
  const { templateId } = useParams()
  const navigate = useNavigate()

  // Verify template exists, fallback to luxe-nails
  const currentId = templateThemes[templateId] ? templateId : 'luxe-nails'
  const config = templateThemes[currentId]

  const [previewMode, setPreviewMode] = useState('desktop') // 'desktop' | 'mobile'
  const [bookingOpen, setBookingOpen] = useState(false)

  // Booking Engine States
  const [bookingStep, setBookingStep] = useState(1) // 1: Services, 2: Artist, 3: Date/Time, 4: Details, 5: Success
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedArtist, setSelectedArtist] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '', email: '', notes: '' })

  // List of timeslots
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM']

  // Force scroll to top on template change
  useEffect(() => {
    const mainViewport = document.querySelector('.browser-content-viewport')
    if (mainViewport) {
      mainViewport.scrollTop = 0
    }
  }, [templateId])

  const handleServiceToggle = (service) => {
    if (selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(selectedServices.filter(s => s.id !== service.id))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handleNextStep = () => {
    if (bookingStep === 1 && selectedServices.length === 0) {
      alert('Vui lòng chọn ít nhất 1 dịch vụ!')
      return
    }
    if (bookingStep === 2 && !selectedArtist) {
      alert('Vui lòng chọn thợ làm móng!')
      return
    }
    if (bookingStep === 3 && (!selectedDate || !selectedTime)) {
      alert('Vui lòng chọn ngày và giờ hẹn!')
      return
    }
    setBookingStep(bookingStep + 1)
  }

  const handlePrevStep = () => {
    setBookingStep(bookingStep - 1)
  }

  const handleFinishBooking = (e) => {
    e.preventDefault()
    if (!clientInfo.name || !clientInfo.phone) {
      alert('Vui lòng điền Họ tên và Số điện thoại!')
      return
    }
    setBookingStep(5)
  }

  const handleResetBooking = () => {
    setBookingStep(1)
    setSelectedServices([])
    setSelectedArtist('')
    setSelectedDate('')
    setSelectedTime('')
    setClientInfo({ name: '', phone: '', email: '', notes: '' })
    setBookingOpen(false)
  }

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0)

  // CSS Variables object for theme rendering
  const isDarkBg = ['#0d2b1d', '#0c0214', '#26030c'].includes(config.colorHex)
  const siteThemeVars = {
    '--theme-primary': config.tagColor,
    '--theme-bg': config.colorHex,
    '--theme-bg-accent': config.accentColor,
    '--theme-border': config.borderColor,
    '--theme-font-heading': config.fontHeading,
    '--theme-font-body': config.fontBody,
    '--theme-text': isDarkBg ? '#ffffff' : '#222222',
    '--theme-text-secondary': isDarkBg ? 'rgba(255,255,255,0.7)' : '#555555',
    '--theme-text-muted': isDarkBg ? 'rgba(255,255,255,0.4)' : '#888888',
    '--theme-card-bg': isDarkBg ? 'rgba(255,255,255,0.04)' : '#ffffff',
    '--theme-card-border': isDarkBg ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  }

  return (
    <div className="demo-viewer-page">
      {/* 1. Preview Top Bar (Vietsoleu control frame) */}
      <div className="preview-top-bar">
        <div className="preview-top-bar__left">
          <button onClick={() => navigate('/dich-vu-nails')} className="preview-back-btn">
            ← Quay lại trang chính
          </button>
          <div className="preview-template-selector">
            <label>Xem mẫu khác:</label>
            <select
              value={currentId}
              onChange={(e) => navigate(`/demo/${e.target.value}`)}
            >
              {Object.entries(templateThemes).map(([id, item]) => (
                <option key={id} value={id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="preview-top-bar__center">
          <button
            className={`preview-device-btn ${previewMode === 'desktop' ? 'active' : ''}`}
            onClick={() => setPreviewMode('desktop')}
          >
            🖥️ Desktop
          </button>
          <button
            className={`preview-device-btn ${previewMode === 'mobile' ? 'active' : ''}`}
            onClick={() => setPreviewMode('mobile')}
          >
            📱 Mobile
          </button>
        </div>

        <div className="preview-top-bar__right">
          <span className="template-current-badge">Bản Xem Thử Website Thực Tế</span>
          <Link
            to={`/dich-vu-nails?selectTemplate=${encodeURIComponent(config.name)}`}
            className="preview-select-btn"
          >
            Chọn Mẫu Này
          </Link>
        </div>
      </div>

      {/* 2. Main Preview Container */}
      <div className={`demo-preview-canvas ${previewMode}`}>
        <div className="browser-header-mock">
          <div className="browser-dots-mock">
            <span></span><span></span><span></span>
          </div>
          <div className="browser-address-mock">
            🔒 https://demo.{currentId}.com/
          </div>
        </div>

        <div className="browser-content-viewport" style={siteThemeVars}>
          <div className="live-demo-site">
            {/* Live Demo Site Navbar */}
            <nav className="live-demo-nav">
              <div className="live-demo-nav__logo">
                💅 {config.name}
              </div>
              <div className="live-demo-nav__links">
                <a href="#services">Dịch vụ & Bảng giá</a>
                <a href="#about">Về chúng tôi</a>
                <a href="#gallery">Bộ sưu tập</a>
              </div>
              <button onClick={() => setBookingOpen(true)} className="live-demo-nav__btn">
                Đặt lịch ngay
              </button>
            </nav>

            {/* Live Demo Site Hero */}
            <header className="live-demo-hero">
              <div className="live-demo-hero__content">
                <span className="live-demo-hero__badge">{config.name}</span>
                <h1 className="live-demo-hero__title">{config.slogan}</h1>
                <p className="live-demo-hero__text">
                  Dịch vụ chăm sóc và làm đẹp móng cao cấp. Đội ngũ nghệ sĩ móng giàu kinh nghiệm, nguyên liệu thảo mộc lành tính và thiết bị tiệt trùng chuẩn mực.
                </p>
                <div className="live-demo-hero__btns">
                  <button onClick={() => setBookingOpen(true)} className="live-demo-hero__btn-primary">
                    Đặt Lịch Hẹn Trực Tuyến
                  </button>
                  <a href="#services" className="live-demo-hero__btn-secondary">
                    Bảng Giá Chi Tiết
                  </a>
                </div>
              </div>
            </header>

            {/* Live Demo Site Intro */}
            <section id="about" className="live-demo-about">
              <div className="live-demo-about__grid">
                <div className="live-demo-about__content">
                  <h2>Chào mừng đến với {config.name}</h2>
                  <p>{config.intro}</p>
                  <div className="live-demo-about__features">
                    <div className="about-feat">
                      <span className="feat-icon">✨</span>
                      <div>
                        <h4>Sơn gel chuẩn trend</h4>
                        <p>Luôn cập nhật các mẫu vẽ Hàn, Nhật độc quyền.</p>
                      </div>
                    </div>
                    <div className="about-feat">
                      <span className="feat-icon">🛡️</span>
                      <div>
                        <h4>Khử trùng 100%</h4>
                        <p>Dụng cụ hấp nhiệt autoclave y tế cho từng khách.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="live-demo-about__image">
                  <div className="mock-image-frame" style={{ backgroundColor: 'var(--theme-bg-accent)' }}>
                    <span className="mock-image-text">📷 Không gian Salon Nails & Spa</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Live Demo Site Services / Pricing */}
            <section id="services" className="live-demo-services">
              <div className="live-demo-section-header">
                <h2>Dịch Vụ & Bảng Giá</h2>
                <p>Quy trình dịch vụ chuyên nghiệp, trọn gói, cam kết không phát sinh chi phí ẩn.</p>
              </div>

              <div className="live-demo-services__grid">
                {config.services.map((service) => (
                  <div className="live-demo-service-card" key={service.id}>
                    <div className="service-card__main">
                      <h3>{service.name}</h3>
                      <span className="service-card__price">{service.priceFormatted}</span>
                    </div>
                    <p className="service-card__desc">{service.desc}</p>
                    <button onClick={() => {
                      setSelectedServices([service])
                      setBookingStep(2)
                      setBookingOpen(true)
                    }} className="service-card__book-btn">
                      Đặt lịch dịch vụ này
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Live Demo Site Gallery */}
            <section id="gallery" className="live-demo-gallery">
              <div className="live-demo-section-header">
                <h2>Bộ Sưu Tập Mẫu Móng Thiết Kế</h2>
                <p>Khám phá các tác phẩm làm móng nghệ thuật thực hiện bởi đội ngũ thợ lành nghề.</p>
              </div>

              <div className="live-demo-gallery__grid">
                <div className="gallery-item">
                  <div className="gallery-item__img" style={{ backgroundColor: 'var(--theme-bg-accent)' }}>
                    <span>📷 Nail Ombre Tráng Gương</span>
                  </div>
                  <h4>Ombre Chrome nails</h4>
                </div>
                <div className="gallery-item">
                  <div className="gallery-item__img" style={{ backgroundColor: 'var(--theme-bg-accent)' }}>
                    <span>📷 Đắp Gel Nhũ Vân Đá</span>
                  </div>
                  <h4>Marble Gel Design</h4>
                </div>
                <div className="gallery-item">
                  <div className="gallery-item__img" style={{ backgroundColor: 'var(--theme-bg-accent)' }}>
                    <span>📷 Móng Vẽ Hoa Cỏ Sweet</span>
                  </div>
                  <h4>Sweet Floral Art</h4>
                </div>
                <div className="gallery-item">
                  <div className="gallery-item__img" style={{ backgroundColor: 'var(--theme-bg-accent)' }}>
                    <span>📷 Móng Đính Charms Cute</span>
                  </div>
                  <h4>Kawaii Charm Nails</h4>
                </div>
              </div>
            </section>

            {/* Live Demo Site Footer */}
            <footer className="live-demo-footer">
              <div className="live-demo-footer__grid">
                <div className="footer-info">
                  <h3>💅 {config.name}</h3>
                  <p>{config.slogan}</p>
                </div>
                <div className="footer-contact">
                  <h4>Liên Hệ & Giờ Mở Cửa</h4>
                  <p>📍 128 Main Street, City Center</p>
                  <p>📞 Phone: +1 (555) 019-2834</p>
                  <p>⏰ Thứ 2 - Chủ nhật: 09:00 AM - 08:00 PM</p>
                </div>
              </div>
              <div className="live-demo-footer__copyright">
                © 2026 {config.name}. Tất cả các quyền được bảo lưu. Bản demo xây dựng bởi Vietsol.
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* 3. Interactive Booking Modal */}
      {bookingOpen && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            {/* Modal Header */}
            <div className="booking-modal__header">
              <h3>Đặt Lịch Hẹn Trực Tuyến</h3>
              <button onClick={handleResetBooking} className="booking-close-btn">&times;</button>
            </div>

            {/* Booking Steps Progress */}
            <div className="booking-steps-progress">
              <span className={`step-dot ${bookingStep >= 1 ? 'active' : ''} ${bookingStep === 1 ? 'current' : ''}`}>1. Dịch vụ</span>
              <span className="step-line"></span>
              <span className={`step-dot ${bookingStep >= 2 ? 'active' : ''} ${bookingStep === 2 ? 'current' : ''}`}>2. Chọn Thợ</span>
              <span className="step-line"></span>
              <span className={`step-dot ${bookingStep >= 3 ? 'active' : ''} ${bookingStep === 3 ? 'current' : ''}`}>3. Giờ hẹn</span>
              <span className="step-line"></span>
              <span className={`step-dot ${bookingStep >= 4 ? 'active' : ''} ${bookingStep === 4 ? 'current' : ''}`}>4. Thông tin</span>
            </div>

            {/* Step 1: Services */}
            {bookingStep === 1 && (
              <div className="booking-step-content">
                <h4>Bước 1: Chọn dịch vụ móng mong muốn</h4>
                <div className="booking-services-list">
                  {config.services.map((s) => (
                    <div
                      key={s.id}
                      className={`booking-service-item ${selectedServices.find(item => item.id === s.id) ? 'selected' : ''}`}
                      onClick={() => handleServiceToggle(s)}
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedServices.find(item => item.id === s.id)}
                        onChange={() => {}} // handled by click of parent div
                      />
                      <div className="svc-info">
                        <strong>{s.name}</strong>
                        <p>{s.desc}</p>
                      </div>
                      <span className="svc-price">{s.priceFormatted}</span>
                    </div>
                  ))}
                </div>
                <div className="booking-summary-bar">
                  <span>Đã chọn: {selectedServices.length} dịch vụ</span>
                  <strong>Tổng giá: ${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            )}

            {/* Step 2: Choose Artist */}
            {bookingStep === 2 && (
              <div className="booking-step-content">
                <h4>Bước 2: Chọn kỹ thuật viên (Nail Artist)</h4>
                <div className="booking-artists-grid">
                  <div
                    className={`booking-artist-card ${selectedArtist === 'Anyone' ? 'selected' : ''}`}
                    onClick={() => setSelectedArtist('Anyone')}
                  >
                    <div className="artist-avatar-mock">👥</div>
                    <strong>Bất kỳ thợ nào trống lịch</strong>
                    <p>Hệ thống tự sắp xếp nhân viên rảnh cho bạn</p>
                  </div>
                  {config.artists.map((artist, idx) => (
                    <div
                      key={idx}
                      className={`booking-artist-card ${selectedArtist === artist ? 'selected' : ''}`}
                      onClick={() => setSelectedArtist(artist)}
                    >
                      <div className="artist-avatar-mock">👤</div>
                      <strong>{artist}</strong>
                      <p>Kỹ thuật viên làm móng tay nghề cao</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {bookingStep === 3 && (
              <div className="booking-step-content">
                <h4>Bước 3: Chọn ngày làm móng & khung giờ</h4>
                <div className="booking-datetime-picker">
                  <div className="datepicker-container">
                    <label>Chọn Ngày:</label>
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="booking-date-input"
                    />
                  </div>
                  <div className="timepicker-container">
                    <label>Khung giờ trống còn lại:</label>
                    <div className="timeslots-grid">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`timeslot-btn ${selectedTime === time ? 'selected' : ''}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Client Info */}
            {bookingStep === 4 && (
              <div className="booking-step-content">
                <h4>Bước 4: Nhập thông tin để nhận tin nhắn lịch hẹn</h4>
                <form onSubmit={handleFinishBooking} className="booking-form-info">
                  <div className="form-group">
                    <label>Họ và Tên *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại (Nhận tin nhắn nhắc lịch SMS) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ví dụ: +1 (555) 123-4567"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email liên hệ</label>
                    <input
                      type="email"
                      placeholder="Ví dụ: customer@gmail.com"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ghi chú đặc biệt (ví dụ: móng yếu cần đắp bột mỏng)</label>
                    <textarea
                      rows="2"
                      placeholder="Nhập ghi chú của bạn tại đây..."
                      value={clientInfo.notes}
                      onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="booking-checkout-summary">
                    <h5>Tóm tắt dịch vụ đặt lịch:</h5>
                    <ul>
                      <li><strong>Dịch vụ:</strong> {selectedServices.map(s => s.name).join(', ')}</li>
                      <li><strong>Nhân viên:</strong> {selectedArtist}</li>
                      <li><strong>Thời gian:</strong> {selectedTime} ngày {selectedDate}</li>
                      <li><strong>Tổng thanh toán:</strong> ${totalPrice.toFixed(2)}</li>
                    </ul>
                  </div>
                  <button type="submit" className="booking-btn-submit">
                    Xác Nhận Đặt Lịch
                  </button>
                </form>
              </div>
            )}

            {/* Step 5: Success Screen */}
            {bookingStep === 5 && (
              <div className="booking-step-content success-screen">
                <div className="success-icon-animation">✓</div>
                <h4>Đặt Lịch Hẹn Thành Công!</h4>
                <p>
                  Xin chào <strong>{clientInfo.name}</strong>, lịch đặt hẹn làm móng của bạn đã được ghi nhận trên hệ thống của <strong>{config.name}</strong>.
                </p>
                <div className="success-details-card">
                  <p><strong>🗓️ Thời gian:</strong> {selectedTime} - {selectedDate}</p>
                  <p><strong>👤 Nhân viên phục vụ:</strong> {selectedArtist}</p>
                  <p><strong>💅 Dịch vụ:</strong> {selectedServices.map(s => s.name).join(', ')}</p>
                  <p><strong>💰 Tổng tiền thanh toán tại quầy:</strong> ${totalPrice.toFixed(2)}</p>
                </div>
                <p className="success-note">
                  🔔 Một tin nhắn SMS xác nhận lịch hẹn kèm địa chỉ đã được gửi tới số điện thoại: <strong>{clientInfo.phone}</strong>. Hẹn gặp lại bạn!
                </p>
                <button onClick={handleResetBooking} className="btn-success-close">
                  Đóng Cửa Sổ Đặt Lịch
                </button>
              </div>
            )}

            {/* Modal Footer Controls */}
            {bookingStep < 4 && (
              <div className="booking-modal__footer">
                {bookingStep > 1 && (
                  <button onClick={handlePrevStep} className="btn-back">
                    Quay lại
                  </button>
                )}
                <button onClick={handleNextStep} className="btn-next">
                  Tiếp tục →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
