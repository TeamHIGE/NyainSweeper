// 猫の場合
 if (panel.isBomb) {
            panel.isHit = true;
            // 猫を表示
            this.showAllBombs();
            return;
        }
        
//数字の場合　


	//猫数＝残マス or 猫数!＝残マス判定
	
	
	
//空白の場合



		
          //ゲームオーバー判定
        
          // クリア判定
    checkIsCleard: function() {
        // 開いたパネルの数をチェック
        if (this.openNum === PANEL_NUM - BOMB_NUM) {
            for (var i = 0, len = this.panels.length; i < len; i++) {
                this.panels[i].setInteractive(false);
            }
            // クリア表示
            this.parent.msg.show();
        }
    },
