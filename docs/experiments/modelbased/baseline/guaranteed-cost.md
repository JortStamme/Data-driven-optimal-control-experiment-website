# Guaranteed Cost Controller (\(\hat{K}_\gamma\))

The guaranteed cost design synthesizes a gain by minimizing an upper bound on the cost of the closed-loop system, while enforcing a strict decay rate of \(\alpha = 0.98\) (with \(\gamma = 0.5\)).

In the hardware tests, this controller successfully balances the pendulum (\(\delta\phi\) converges to zero) and keeps the servo arm relatively stationary, recovering well from manual disturbances.

### Experimental Validation vs. MATLAB Simulation
The videos below show the physical hardware response alongside the real-time **balance error (\(\delta\phi\))** plotted in MATLAB. 

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Balance Error</div>
    <video id="vid1_gc" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../assets/modelbased/baseline/Khat_Baseline.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_gc" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../assets/modelbased/baseline/Khat_Baseline.mp4" type="video/mp4">
    </video>
  </div>
</div>

<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_gc', 'vid2_gc')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_gc', 'vid2_gc')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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