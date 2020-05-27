const testTitle = document.getElementById('poll__title');
const testButtons = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
    if ((xhr.readyState === 4) && (xhr.status === 200)) {
        let test = JSON.parse(xhr.response);
        
        testTitle.textContent = test.data.title;

        let answerArray = test.data.answers;
        
        for (let i = 0; i < answerArray.length; i++) {
            let testButton = document.createElement('button');
            testButton.classList.add('poll__answer');
            testButton.innerHTML = `${answerArray[i]}`;
            testButtons.append(testButton);
        }
    
        const answers = document.querySelectorAll('.poll__answer');

        for (let j = 0; j < answers.length; j++) {
            answers[j].addEventListener('click', function(event) {
                event.preventDefault();        
                alert('Спасибо, ваш голос засчитан!');

                testButtons.remove();

                let argument = `vote=${test.id}&answer=${j}`;
                
                xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr.send(argument);
                xhr.onreadystatechange = function() {
                    if ((xhr.readyState === 4) && (xhr.status === 200)) {
                        let statistics = JSON.parse(xhr.response);
                        
                        let sum = 0;

                        for (let k = 0; k < statistics.stat.length; k++) {
                            sum += statistics.stat[k].votes;
                        }

                        let statList = document.createElement('div');
                        statList.classList.add('stat__answers');

                        for (let l = 0; l < statistics.stat.length; l++) {
                            let statElement = document.createElement('div');
                            statElement.classList.add('stat__answer');
                            statElement.innerHTML += `
                                <div class='stat'>
                                    ${statistics.stat[l].answer}: ${((statistics.stat[l].votes / sum) * 100).toFixed(2)}%
                                </div>`
                            statList.insertAdjacentElement('beforeEnd', statElement);
                        }
                        
                        testTitle.append(statList);
                    }
                }
            });
        }
    }
}