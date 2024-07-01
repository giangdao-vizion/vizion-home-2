import HeaderRight from './HeaderRight';
import Logo from './Logo';
import Menu from './Menu';
import CanvasMenu from './CanvasMenu';

export default function Header3({ headerClass }) {
  return (
    <>
      <header id="header" className={`vz-header ${headerClass}`}>
        <div className="vz-header-container">
          <div className="vz-header-icon__left">
            <div className="vz-header-icon__left-mail">
              <i className="vz-header-icon la la-envelope-o" />
              <span className="vz-header-info right">info@vizon.space</span>
            </div>

            <div className="vz-header-icon__left-phone">
              <i className="vz-header-icon la la-phone" />
              <span className="vz-header-info">0866455605</span>
            </div>
          </div>
          <div>
            <i className="vz-header-icon vz-header-icon__right la la-facebook" />
            <i className="vz-header-icon vz-header-icon__right la la-instagram" />
          </div>
        </div>
      </header>
    </>
  );
}
