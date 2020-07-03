const blogImage = document.querySelectorAll('.d-none')[1];
const name = document.querySelector('.inputfield');
const labelFor = document.querySelector('.label-for');
const county = document.querySelector('#input-county');
const submit = document.querySelector('#addBlog');
const _alert = document.querySelector('#alert-container');
const form = document.querySelector('.dummy-form');


const showProgress = () => {
    var width = 0;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        _alert.classList.remove('d-none');
        _alert.style.background = "green";
        _alert.textContent = `Creating your blog: ${width * 1 }%`;
        if(width === 100) {
            _alert.textContent = 'Your blog is ready to view.'
            labelFor.textContent = 'Add photo';
            name.placeholder = 'Enter name for your blog';
            county.options[0].textContent = 'Select county';
            form.reset();
        }
      }
    }
  }

const checkInput = (event) => {
    event.preventDefault();
    if(blogImage.files.length === 0) {
        labelFor.textContent = 'Image is required';
        labelFor.scrollIntoView();
        _alert.classList.remove('d-none'); _alert.textContent = 'No file selected';
        return false;
    }
    if(!name.value) {
        _alert.classList.remove('d-none'); _alert.textContent = 'Enter a name';
        name.placeholder = 'Blog name is required';
        name.scrollIntoView();
        return false;
    }
    if(county.options[county.selectedIndex].value === 'null') {
        _alert.classList.remove('d-none'); _alert.textContent = 'Select a county';
        county.options[0].textContent = 'County is required'
        county.scrollIntoView();
        return false;
    }
    showProgress();

    /* do here any backend processes, like uploading the data to firebase in the backend.
    Firebase has a way to fetch the progress percentage:

    More details below:
    https://firebase.google.com/docs/storage/web/upload-files

    You can resuse my html and add styles as you wish. I used colors for the alert section based on result
    Reddish for errors and green for success. Of course you can change this also.
    */
};

submit.addEventListener('click', checkInput);