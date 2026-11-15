# Stabilizing Policy Iteration (sPI)

The sPI algorithm is an iterative approach that improves a stabilizing gain step-by-step. By taking a convex combination of a standard policy improvement step and the previous gain, it ensures that every iteration remains stabilizing with a prescribed decay rate (\(\alpha = 0.98\)). 

The performance of the final sPI controller heavily depends on its initialization (\(K_0\)). 

---

## 1. Initialized with Guaranteed Cost (\(K_0 = \hat{K}_\gamma\))
When initialized with the guaranteed cost gain, the algorithm converges monotonically. Below, the physical behavior is compared with the **balance error (\(\delta\phi\))**.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Balance Error</div>
    <video id="vid1_spi_cost" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/baseline/balance_error_Khat_sPI_Baseline.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_spi_cost" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/baseline/Khat_sPI_Baseline_final_ml.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_spi_cost', 'vid2_spi_cost')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_spi_cost', 'vid2_spi_cost')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. Initialized with Guaranteed Gain Error (\(K_0 = \bar{K}_\gamma\))
When initialized with the guaranteed gain error, the resulting controller exhibits the characteristic servo drift seen in its parent controller. Below, the physical behavior is compared with the **servo angle (\(\psi\))**.

<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Servo Angle</div>
    <video id="vid1_spi_gain" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/baseline/Kbar_sPI_Baseline_final_ml.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_spi_gain" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/modelbased/baseline/Kbar_sPI_Baseline_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_spi_gain', 'vid2_spi_gain')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_spi_gain', 'vid2_spi_gain')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

<!-- Unified JavaScript function for all synchronized videos on this page -->
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