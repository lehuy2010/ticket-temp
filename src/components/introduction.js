
import React, {Component} from 'react'
import '../App.css'
import { Typography, Row, Timeline, Divider, Carousel  } from 'antd'
const {Title, Text} = Typography;

class Introduction extends Component {
    constructor(props) { 
        super(props)

    }
    componentDidMount() {
        document.title = 'Giới thiệu'
    }
    render () { 
        return (
            <div>
            <Typography align='center'>
                <img src={require('../image/Introduction/introduction-default.png')} alt = ""/>
                <Title style={{ color: '#389e0d', marginTop: '200px' }}
                >
                    GIỚI THIỆU SƠ LƯỢC
               </Title>
                <p style = {{marginLeft: '320px', marginRight: '320px', marginBottom: '70px'}} >
                Công ty Cổ Phần Du lịch Văn hóa Suối Tiên phôi thai là
                một Lâm trại nuôi trăn và sản xuất hàng thủ công mỹ
                nghệ do ông Đinh Văn Vui - một người con quê hương Sóc
                Trăng bắt đầu xây dựng vào năm 1987. Lâm trại lúc
                đầu chỉ có 6.600 m² đất hoang hóa, có con suối chảy qua
                với huyền thoại 7 cô gái đồng trinh cùng tuổi Rồng quy
                tiên tại dòng suối nên dân trong vùng gọi là Suối Tiên. </p>
                <Divider><Title style={{ color: '#389e0d'}}
                >
                    LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN
               </Title></Divider>
               
            </Typography>
                <div>
                    <Timeline style={{ marginLeft: '40%' }}>

                        <Timeline.Item color='green' >
                                <b>11/01/1997</b>: Khu vui chơi bắt đầu đi vào quá trình xây dựng
                        </Timeline.Item>

                        <Timeline.Item color='green' >
                                <b>20/03/2002</b>: Chính thức hoàn thành xây dựng
                        </Timeline.Item>

                        <Timeline.Item color='green' >
                                <b> 02/09/2002</b>: Nhân dịp kỷ niệm quốc khánh nước CHXHCN Việt Nam 2 tháng 9,<br/> Du 
                                Lịch Văn Hóa Suối Tiên chính thức mở cửa đón du khách từ mọi miền
                                đến tham quan. 
                        </Timeline.Item>
                    
                    </Timeline>

                </div>
            <Carousel 
            swipe = 'true'
            >
                    <div>
                        <img src={require('../image/Introduction/introduction-slider-2.jpg')}
                         alt='some text' className = 'introduction-slider'/>
                    </div>
                    <div>
                        <img src={require('../image/Introduction/introduction-slider-3.jpg')}
                         alt='some text' className = 'introduction-slider'/>
                    </div>
                    <div>
                        <img src={require('../image/Introduction/introduction-slider-4.jpg')}
                         alt='some text' className = 'introduction-slider'/>
                    </div>
             
            </Carousel>
            </div>
        )
    }
}

export default Introduction