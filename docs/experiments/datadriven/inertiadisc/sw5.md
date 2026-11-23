# Inertia Disc: \(5^\circ\) Square Wave Tracking

All six controllers (D1 and D2 × Direct noise-free, Direct noisy, and Indirect LS) are tested on a \(5^\circ\) square wave at \(0.125\text{ Hz}\) (\(24\text{ s}\), metrics averaged over five full swings).

### Observations
* Overcoming static friction (\(\approx 0.18\text{-}0.20\text{ V}\)) causes an integrator wind-up delay after reversals.
* **D2 Direct, noisy** (\(K_v = -1.9331\)) breaks stiction fastest (\(\approx 1\text{ s}\)) and is the only controller to settle within \(2\%\) (\(t_s = 2.74\text{ s}\), \(e_{\text{ss}} = 0.14^\circ\)).
* **D2 Direct, noise-free** and **D2 Indirect (LS)** wait \(\approx 2\text{ s}\) and produce virtually identical responses (\(e_{\text{ss}} \approx 0.45^\circ\)).
* **D1 Direct, noise-free** and **D1 Indirect (LS)** stall near \(0^\circ\) (\(e_{\text{ss}} \approx 5.4^\circ\)), while **D1 Direct, noisy** (\(\max|u| = 0.065\text{ V}\)) never breaks stiction (\(\psi \equiv 0^\circ\)).

## 1. D1 (PRBS 3 V) — Direct, noise-free
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_sw5_d1_nf" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_PRBS_3V_K_noisefree_SW5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_sw5_d1_nf" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/sw5/PRBS_3V_K_noisefree_sw5_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_sw5_d1_nf', 'vid2_sw5_d1_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_sw5_d1_nf', 'vid2_sw5_d1_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 2. D1 (PRBS 3 V) — Direct, noisy
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_sw5_d1_noisy" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_PRBS_3V_K_noisy_SW5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_sw5_d1_noisy" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/sw5/PRBS_3V_K_noisy_sw5_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_sw5_d1_noisy', 'vid2_sw5_d1_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_sw5_d1_noisy', 'vid2_sw5_d1_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 3. D1 (PRBS 3 V) — Indirect (LS)
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_sw5_d1_ls" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_PRBS_3V_K_indirect_SW5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_sw5_d1_ls" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/sw5/PRBS_3V_K_indirect_sw5_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_sw5_d1_ls', 'vid2_sw5_d1_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_sw5_d1_ls', 'vid2_sw5_d1_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 4. D2 (Multisine 8 V) — Direct, noise-free
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_sw5_d2_nf" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_ms_8V_K_noisefree_SW5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_sw5_d2_nf" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/sw5/ms_8V_K_noisefree_sw5_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_sw5_d2_nf', 'vid2_sw5_d2_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_sw5_d2_nf', 'vid2_sw5_d2_nf')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 5. D2 (Multisine 8 V) — Direct, noisy
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_sw5_d2_noisy" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_ms_8V_K_noisy_SW5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_sw5_d2_noisy" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/sw5/ms_8V_K_noisy_sw5_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 40px;">
  <button onclick="syncPlayPause('vid1_sw5_d2_noisy', 'vid2_sw5_d2_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_sw5_d2_noisy', 'vid2_sw5_d2_noisy')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
</div>

---

## 6. D2 (Multisine 8 V) — Indirect (LS)
<div style="display: flex; justify-content: center; gap: 2%; margin-top: 20px;">
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">MATLAB: Logged Response</div>
    <video id="vid1_sw5_d2_ls" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/tracking_animations/anim_ms_8V_K_indirect_SW5.mp4" type="video/mp4">
    </video>
  </div>
  <div style="width: 49%;">
    <div style="text-align: center; font-weight: bold; margin-bottom: 5px;">Physical Experiment</div>
    <video id="vid2_sw5_d2_ls" width="100%" muted>
      <source src="../../../../assets/datadriven/inertiadisc/sw5/ms_8V_K_indirect_sw5_final.mp4" type="video/mp4">
    </video>
  </div>
</div>
<div style="text-align: center; margin-top: 15px; margin-bottom: 30px;">
  <button onclick="syncPlayPause('vid1_sw5_d2_ls', 'vid2_sw5_d2_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">⏯ Play / Pause</button>
  <button onclick="syncRestart('vid1_sw5_d2_ls', 'vid2_sw5_d2_ls')" style="padding: 8px 15px; font-size: 16px; cursor: pointer; border-radius: 5px;">🔄 Restart</button>
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