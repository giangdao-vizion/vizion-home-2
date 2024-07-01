export default function GetInTouch() {
  return (
    <>
      <section
        className="section background-full background-overlay bo4"
        style={{
          backgroundImage:
            'url(/assets/images/vizion/others/closeup-business-woman-hand-typing-laptop-keyboard-with-m.jpg)',
        }}
      >
        <div className="container">
          <div className="block-contact-form">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="spdtb">
                  <div className="heading heading-alway-white mb32">
                    <div className="heading-sub">Liên hệ ngay</div>
                    <h2 className="heading-title size-xl">Bạn Còn Chờ Gì Nữa?</h2>
                  </div>
                  {/* <div className="button-wrap">
                                        <Link href="/contact-01" className="button fullfield" title="Book your seat">Book your seat</Link>
                                    </div> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form layout-02">
                  <div className="heading heading-alway-white mb32">
                    <h2 className="heading-title">Đăng ký</h2>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="field-input">
                          <input type="text" name="full_name" placeholder="Họ và Tên" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="field-input">
                          <input type="text" name="work_email" id="work_email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="field-input">
                          <input type="text" name="phone_number" id="phone_number" placeholder="Số điện thoại" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="field-submit">
                          <input type="submit" defaultValue="Confirm" value={'Đăng ký'} name="confirm" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
