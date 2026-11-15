# Guaranteed Gain Error Controller (\(\bar{K}_\gamma\))

The guaranteed gain error design aims to find a stabilizing gain that is as close as possible to the optimal (but unstable) discounted gain \(K^\star_\gamma\). We use a baseline decay rate of \(\alpha = 0.98\).

While this controller successfully balances the pendulum, the hardware tests reveal an interesting limitation: the servo arm experiences severe **servo drift (wandering)**. This drift occurs because the controller prioritizes mimicking the optimal gain over stiffening the servo loop, a phenomenon we investigate deeply in the \(\alpha\)-sweep.

### Experimental Validation vs. MATLAB Simulation
The videos below show the physical hardware response alongside the real-time **servo angle (\(\psi\))** plotted in MATLAB, clearly illustrating the drift.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Servo Angle</div>
    <video id="vid1_gge" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="/assets/modelbased/baseline/Kbar_Baseline_servo_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_gge" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="/assets/modelbased/baseline/Kbar_Baseline_edited.mp4" type="video/mp4">
    </video>
  </div>
</div>

<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_gge', 'vid2_gge')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_gge', 'vid2_gge')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<script>
  function syncPlayPause(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    if (v1.paused) { v1.play(); v2.play(); } 
    else { v1.pause(); v2.pause(); }
  }
  function syncRestart(id1, id2) {
    var v1 = document.getElementById(id1);
    var v2 = document.getElementById(id2);
    v1.currentTime = 0; v2.currentTime = 0;
    v1.play(); v2.play();
  }
</script>