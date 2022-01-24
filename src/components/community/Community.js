import { FiImage } from 'react-icons/fi';
import './Community.css'

function Community(){
    return (
        <div id="community">
            <div className='fir_row'>
                OUR COMMUNITY
            </div>
            <div className='sec_row'>
                Stay up to date. Join in!
            </div>
            <div className='trd_row'>
                <div className='itm'>
                    <FiImage size={100}/>
                    <div className='caption'>
                        Follow The Latest News
                    </div>
                    <div className='btn'>
                        JOIN
                    </div>
                </div>

                <div className='itm'>
                    <FiImage size={100}/>
                    <div className='caption'>
                        Check The Progress
                    </div>
                    <div className='btn'>
                        JOIN
                    </div>
                </div>

                <div className='itm'>
                    <FiImage size={100}/>
                    <div className='caption'>
                        Join The Community
                    </div>
                    <div className='btn'>
                        JOIN
                    </div>
                </div>
            </div>

            <div className='fir_row'>
                Meet Our Team
            </div>
            <div className='fth_row'>
                <div className='itm'>
                    <FiImage size={200}/>
                    <div className='caption'>
                        WOJTEK
                    </div>
                    <div className='detail'>
                        (@mama45)
                    </div>
                    <div className='detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </div>
                </div>
                <div className='itm'>
                    <FiImage size={200}/>
                    <div className='caption'>
                        WOJTEK
                    </div>
                    <div className='detail'>
                        (@mama45)
                    </div>
                    <div className='detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </div>
                </div>
                <div className='itm'>
                    <FiImage size={200}/>
                    <div className='caption'>
                        WOJTEK
                    </div>
                    <div className='detail'>
                        (@mama45)
                    </div>
                    <div className='detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </div>
                </div>
                <div className='itm'>
                    <FiImage size={200}/>
                    <div className='caption'>
                        WOJTEK
                    </div>
                    <div className='detail'>
                        (@mama45)
                    </div>
                    <div className='detail'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </div>
                </div>
               
            </div>
        </div>
    );
}
export default Community;