# Inertia Disc: \(0.005\text{--}0.5\text{ Hz}\) Chirp Tracking

All six controllers (D1 and D2 × Direct noise-free, Direct noisy, and Indirect LS) are tested on a \(0.005\text{--}0.5\text{ Hz}\) chirp reference (\(10\text{ s}\) period, \(0\%\) saturation).

### Observations & Metrics (Table C.6)
* Without feedforward, all five well-posed designs exhibit phase lag (\(\text{nRMSE} \in [73.9\%, 94.6\%]\), \(\text{RMS } u \approx 0.21\text{ V}\), \(\max|u| \le 0.41\text{ V}\)).
* **D2 Direct, noisy** achieves the lowest tracking error (\(\text{RMSE} = 74.0^\circ\), \(\text{nRMSE} = 73.9\%\)), while **D2 Direct, noise-free** and **D2 Indirect (LS)** remain identical (\(\text{RMSE} = 85.3^\circ\)).
* **D1 Direct, noisy** barely tracks the chirp (\(\text{nRMSE} = 101.3\%\), \(\text{RMS } u = 0.54\text{ V}\), \(\max|u| = 1.36\text{ V}\)).

## 1. D1 (PRBS 3 V) — Direct, noise-free
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_chirp_d1_nf" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_PRBS_3V_K_noisefree_chirp.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_chirp_d1_nf" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/chirp/PRBS_3V_K_noisefree_chirp_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_chirp_d1_nf', 'vid2_chirp_d1_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_chirp_d1_nf', 'vid2_chirp_d1_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. D1 (PRBS 3 V) — Direct, noisy
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_chirp_d1_noisy" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_PRBS_3V_K_noisy_chirp.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_chirp_d1_noisy" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/chirp/PRBS_3V_K_noisy_chirp_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_chirp_d1_noisy', 'vid2_chirp_d1_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_chirp_d1_noisy', 'vid2_chirp_d1_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 3. D1 (PRBS 3 V) — Indirect (LS)
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_chirp_d1_ls" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_PRBS_3V_K_indirect_chirp.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_chirp_d1_ls" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/chirp/PRBS_3V_K_indirect_chirp_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_chirp_d1_ls', 'vid2_chirp_d1_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_chirp_d1_ls', 'vid2_chirp_d1_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 4. D2 (Multisine 8 V) — Direct, noise-free
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_chirp_d2_nf" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_ms_8V_K_noisefree_chirp.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_chirp_d2_nf" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/chirp/ms_8V_K_noisefree_chirp_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_chirp_d2_nf', 'vid2_chirp_d2_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_chirp_d2_nf', 'vid2_chirp_d2_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 5. D2 (Multisine 8 V) — Direct, noisy
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_chirp_d2_noisy" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_ms_8V_K_noisy_chirp.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_chirp_d2_noisy" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/chirp/ms_8V_K_noisy_chirp_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_chirp_d2_noisy', 'vid2_chirp_d2_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_chirp_d2_noisy', 'vid2_chirp_d2_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 6. D2 (Multisine 8 V) — Indirect (LS)
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_chirp_d2_ls" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL MATLAB VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_ms_8V_K_indirect_chirp.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_chirp_d2_ls" width="100%" muted>
      <!-- REPLACE WITH YOUR ACTUAL PHYSICAL VIDEO FILE NAME -->
      <source src="../../../../assets/datadriven/inertiadisc/chirp/ms_8V_K_indirect_chirp_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_chirp_d2_ls', 'vid2_chirp_d2_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_chirp_d2_ls', 'vid2_chirp_d2_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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