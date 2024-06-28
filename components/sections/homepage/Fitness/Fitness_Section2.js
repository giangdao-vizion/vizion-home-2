import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Fitness_Section2() {
    const percentage = 75
    return (
        <>

            <section className="section spdt">
                <div className="container">
                    <div className="block-canvas">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="item">

                                    <div
                                        className="circle-progress"
                                    >
                                        <div style={{ width: 120, height: 120 }}>
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                strokeWidth={2}
                                                styles={buildStyles({
                                                    textColor: "#FFCC00",
                                                    trailColor: '#EDEDED00',
                                                    pathColor: "#FFCC00",
                                                })}
                                            />
                                        </div>

                                    </div>
                                    <div className="content">
                                        <h4 className="title">Schedule</h4>
                                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item">
                                    <div
                                        className="circle-progress"
                                    >
                                        <div style={{ width: 120, height: 120 }}>
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                strokeWidth={2}
                                                styles={buildStyles({
                                                    textColor: "#2DCB48",
                                                    trailColor: '#EDEDED00',
                                                    pathColor: "#2DCB48",
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Develop</h4>
                                        <div className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}