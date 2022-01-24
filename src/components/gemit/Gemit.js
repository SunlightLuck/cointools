import './Gemit.css';
import { FiImage } from 'react-icons/fi';

function Gemit(){
    return (
        <div id="gemit">
            GEMIT TOKEN AND TOKENOMICS
            <div id="gemit_sec_row">
                <div id="getmit_sec_row_fir_col">
                    <div className='getmit_sec_row_fir_col_row'>
                        ANY TRANSACTION:
                    </div>
                    <div className='getmit_sec_row_fir_col_row'>
                        <FiImage size={80}/>
                        1% burn
                    </div>
                    <div className='getmit_sec_row_fir_col_row'>
                        <FiImage size={80}/>
                        1% burn
                    </div>
                    <div className='getmit_sec_row_fir_col_row'>
                        <FiImage size={80}/>
                        1% burn
                    </div>
                    <div className='getmit_sec_row_fir_col_row'>
                        <FiImage size={80}/>
                        1% burn
                    </div>
                    <div className='getmit_sec_row_fir_col_row'>
                        <FiImage size={80}/>
                        1% burn
                    </div>
                    <div className='getmit_sec_row_fir_col_row'>
                        LP locked till 2025 DxLock
                    </div>
                </div>
                <div id="getmit_sec_row_sec_col">
                    <div className='captionBold'>
                        Token Name
                    </div>
                    <div className='captionNormal'>
                        GEMIT.app
                    </div>

                    <div className='captionBold'>
                        Symbol
                    </div>
                    <div className='captionNormal'>
                        GEMIT
                    </div>

                    <div className='captionBold'>
                        Contract
                    </div>
                    <div className='captionNormal'>
                        JN2KERUz85ccrG3wsBti/Crypto?node-id=843%3A24906
                    </div>
                    
                    <div className='captionBold'>
                        Total Supply
                    </div>
                    <div className='captionNormal'>
                        100mln
                    </div>

                    <div className='captionBold'>
                        Burned
                    </div>
                    <div className='captionNormal'>
                        25mln
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gemit;