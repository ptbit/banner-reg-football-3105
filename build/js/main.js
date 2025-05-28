"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener('orientationchange', function () {
  location.reload(true);
});

// padding no-ios
// document.addEventListener('DOMContentLoaded', function () {
//   let date = document.querySelector('.reg__date');
//   let time = document.querySelector('.reg__time');
//   let teams = document.querySelectorAll('.reg__team');
//   let mid = document.querySelector('.footer__mid');
//   let before = document.querySelector('.footer__before');

//   if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
//     date.classList.add('noios-padding');
//     time.classList.add('noios-padding');
//     teams.forEach((team) => {
//       team.classList.add('noios-padding');
//     });
//     mid.classList.add('noios-padding');
//     before.classList.add('noios-padding');
//   }
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmNhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFNBQVNBLFNBQVNBLENBQUEsRUFBRztFQUNwQixTQUFTQyxTQUFTQSxDQUFBLEVBQUc7SUFDbkIsSUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxJQUFJO0lBQ2xDQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsTUFBTSxLQUFBQyxNQUFBLENBQUtQLEVBQUUsT0FBSSxDQUFDO0VBQy9EO0VBQ0FELFNBQVMsQ0FBQyxDQUFDO0VBQ1hFLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxTQUFTLENBQUM7QUFDOUMsQ0FBQyxFQUFFLENBQUM7QUFFSkUsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFNO0VBQ2pEQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gaW5pdDEwMHZoKCkge1xuICBmdW5jdGlvbiBzZXRIZWlnaHQoKSB7XG4gICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICB9XG4gIHNldEhlaWdodCgpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcbn0pKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgpID0+IHtcbiAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xufSk7XG5cbi8vIHBhZGRpbmcgbm8taW9zXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuLy8gICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdfX2RhdGUnKTtcbi8vICAgbGV0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnX190aW1lJyk7XG4vLyAgIGxldCB0ZWFtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWdfX3RlYW0nKTtcbi8vICAgbGV0IG1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX21pZCcpO1xuLy8gICBsZXQgYmVmb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fYmVmb3JlJyk7XG5cbi8vICAgaWYgKCEvaVBhZHxpUGhvbmV8aVBvZHxNYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbi8vICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICB0ZWFtcy5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4vLyAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgICB9KTtcbi8vICAgICBtaWQuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xuLy8gICAgIGJlZm9yZS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XG4vLyAgIH1cbi8vIH0pO1xuIl19
