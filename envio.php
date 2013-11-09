<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Mensagem enviada</title>
</head>

<body>
<?php
    /*Altere a cor que o campo ficará caso algum erro na validação, na variável $corerro*/
    $aviso = false; $classaviso = 'none'; $corerro = '#FFBABA'; $title_campo = array();
    /*Defina aqui todos os campos do formulário na ordem Label,
    *name do input ou textarea,
    *valor inicial do campo (dica do que preencher),caso textarea, informe 'textarea',
    *caso textarea crie um array e defina rows e cols, conforme no exemplo abaixo,
    *defina no final se o campo é obrigario ou não com 1 ou 0
    **/
    $arraycampos = array(
                         array('Nome','nome','Informe seu nome','obrigatorio'=>1),
                         array('E-mail','email','Informe seu email','obrigatorio'=>1),
                         array('Telefone','telefone','Informe seu telefone','obrigatorio'=>0),
                         array('Cidade','cidade','Informe sua cidade','obrigatorio'=>0),
                         array('Mensagem','mensagem','Escreva sua mensagem','textarea',
                               array('rows'=>'10', 'col'=>'22'),'obrigatorio'=>1
                               )
                         );
    function validacao($arraycampos){
        $return = array();
        if(isset($_POST['formulario'])){
            for($i=0;$i<count($arraycampos);$i++){
                $campo = $arraycampos[$i][1];
                if(isset($arraycampos[$i]['obrigatorio'])){
                    $obrigatorio = $arraycampos[$i]['obrigatorio'];
                }else{
                    $obrigatorio = false;
                }
                if(isset($_POST[$campo])){
                    if($obrigatorio){
                        if(trim($_POST[$campo])=='' || $_POST[$campo] == '* '.$arraycampos[$i][2]){
                            $return[] = $campo;
                            
                        }
                    }
                    if(trim($_POST[$campo])!='' && $_POST[$campo] != '* '.$arraycampos[$i][2] && $campo == 'email' && !filter_var($_POST[$campo], FILTER_VALIDATE_EMAIL)){
                        $return['email'] = $campo;
                    }
                }
            }
            
        }else{
            return false;
        }
        return $return;
    }
    /*Campos com erro*/
    if(isset($_POST['formulario'])){
        $campoerror = validacao($arraycampos); $aviso=array();
        if(sizeof($campoerror) > 0){
            $aviso[0] = 'Erro:<br>';
            foreach($campoerror as $k => $v){
                if($k==='email'){
                    $aviso[0] .= 'E-mail <strong>'.$_POST['email'].'</strong> inválido.<br>';
                    $title_campo[$v] = 'E-mail inválido';
                }else{
                    $aviso[0] .= 'O campo <strong>'.$v.'</strong> é obrigatorio.<br>';
                    $title_campo[$v] = 'O campo é obrigatório';
                }
            }
            $aviso[1] = 0;
        }elseif(isset($_POST['formulario'])){
            $aviso[1] = 1;
        }
    }
?>
</body>
</html>