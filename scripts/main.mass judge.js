// �L�̏ꍇ
 if (panel.isBomb) {
            panel.isHit = true;
            // �L��\��
            this.showAllBombs();
            return;
        }
        
//�����̏ꍇ�@


	//�L�����c�}�X or �L��!���c�}�X����
	
	
	
//�󔒂̏ꍇ



		
          //�Q�[���I�[�o�[����
        
          // �N���A����
    checkIsCleard: function() {
        // �J�����p�l���̐����`�F�b�N
        if (this.openNum === PANEL_NUM - BOMB_NUM) {
            for (var i = 0, len = this.panels.length; i < len; i++) {
                this.panels[i].setInteractive(false);
            }
            // �N���A�\��
            this.parent.msg.show();
        }
    },
