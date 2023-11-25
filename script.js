let stopwatch;
    let laps = [];
    let lapCounter = 1;

    function startStopwatch() {
      if (!stopwatch) {
        stopwatch = setInterval(updateStopwatch, 1000);
      }
    }

    function pauseStopwatch() {
      clearInterval(stopwatch);
      stopwatch = null;
    }

    function resetStopwatch() {
      clearInterval(stopwatch);
      stopwatch = null;
      document.getElementById('stopwatch').textContent = '00:00:00';
      laps = [];
      lapCounter = 1;
      updateLaps();
    }

    function updateStopwatch() {
      const stopwatchElement = document.getElementById('stopwatch');
      const time = stopwatchElement.textContent.split(':');
      let seconds = parseInt(time[2], 10);
      let minutes = parseInt(time[1], 10);
      let hours = parseInt(time[0], 10);

      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      const formattedTime = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);

      stopwatchElement.textContent = formattedTime;
    }

    function lapTime() {
      const currentLapTime = document.getElementById('stopwatch').textContent;
      laps.push({ lap: lapCounter, time: currentLapTime });
      lapCounter++;
      updateLaps();
    }

    function updateLaps() {
      const lapsElement = document.getElementById('laps');
      lapsElement.innerHTML = '<h3>Lap Times</h3>';
      laps.forEach(lap => {
        lapsElement.innerHTML += `<p>Lap ${lap.lap}: ${lap.time}</p>`;
      });
    }